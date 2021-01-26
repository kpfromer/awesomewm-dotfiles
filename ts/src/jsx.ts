/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as ts from 'typescript';
import {
  createCallExpression,
  createIdentifier,
  createNilLiteral,
  createStringLiteral,
  createTableIndexExpression,
  FunctionVisitor,
  Plugin,
  TransformationContext,
  VisitorResult,
} from 'typescript-to-lua';
import {
  LuaLibFeature,
  transformLuaLibFunction,
} from 'typescript-to-lua/dist/transformation/utils/lualib';
import { transformArguments } from 'typescript-to-lua/dist/transformation/visitors/call';
import { literalVisitors } from 'typescript-to-lua/dist/transformation/visitors/literal';
import * as tstl from 'typescript-to-lua';

/*
Tools:
https://babeljs.io/en/repl
https://ts-ast-viewer.com/
*/

const transformObjectLiteral = literalVisitors[
  ts.SyntaxKind.ObjectLiteralExpression
] as FunctionVisitor<ts.ObjectLiteralExpression>;

function transformJsxAttributesExpression(
  expression: ts.JsxAttributes,
  context: TransformationContext,
): VisitorResult<ts.Expression> {
  const hasSpread = expression.properties.some(
    (element) => element.kind === ts.SyntaxKind.JsxSpreadAttribute,
  );
  /*
    Documents referenced:
    - https://ts-ast-viewer.com/
    - https://babeljs.io/en/repl
    For how babel transpiles jsx spread to object.assign
    - https://babeljs.io/en/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBAllApgWwjAvDA2gKAJAA8ARgE4wD0AfADQ4wyGkWU4C6OOoksAFhjAQAqiaC3rjxBBChgBvAHSKSIqAF85i-cugAmdQDN0sgIzqqdCeNnTUqixILlhooA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.12.3&externalPlugins=
    Rest for how to create object.assign in typescript-to-lua
    - https://github.com/TypeScriptToLua/TypeScriptToLua/blob/b1eb04141da93263d80a8bb762f4dfc1b6d2b207/src/transformation/builtins/object.ts#L17
    - https://github.com/TypeScriptToLua/TypeScriptToLua/blob/9783568df3f30bea598ac539aa61cf70cf365eeb/src/transformation/visitors/literal.ts#L86
  */
  if (hasSpread) {
    // TODO: break out to function and document
    const expressions = expression.properties.reduce((prev, element) => {
      if (element.kind === ts.SyntaxKind.JsxSpreadAttribute) {
        // {...spread1} x={1} y={10} {...spread2} = [spread1, {x:1, y: 10}, spread2]
        const properties: ts.PropertyAssignment[] = [];
        while (
          prev[prev.length - 1] &&
          prev[prev.length - 1].kind === ts.SyntaxKind.PropertyAssignment
        ) {
          properties.push(prev.pop()! as ts.PropertyAssignment);
        }
        const objectLiteral = ts.createObjectLiteral(properties);
        return [...prev, objectLiteral, element.expression];
      } else {
        const valueOrExpression = element.initializer
          ? element.initializer
          : ts.createLiteral(true);
        return [...prev, ts.createPropertyAssignment(element.name, valueOrExpression)];
      }
    }, [] as (ts.ObjectLiteralExpression | ts.Expression | ts.PropertyAssignment | ts.JsxExpression)[]);
    // add remaining x={1} y={10} to their own object
    const properties: ts.PropertyAssignment[] = [];
    while (
      expressions[expressions.length - 1] &&
      expressions[expressions.length - 1].kind === ts.SyntaxKind.PropertyAssignment
    ) {
      properties.push(expressions.pop()! as ts.PropertyAssignment);
    }
    const objectLiteral = ts.createObjectLiteral(properties);
    const objectExpressions =
      properties.length > 0
        ? ([...expressions, objectLiteral] as (ts.ObjectLiteralExpression | ts.Expression)[])
        : (expressions as ts.Expression[]);

    // Object.assign({}, ...expressions)
    return transformLuaLibFunction(
      context,
      LuaLibFeature.ObjectAssign,
      ts.createObjectLiteral([], false),
      ...transformArguments(context, objectExpressions),
    );
  } else {
    const properties = expression.properties
      .filter(
        (element): element is ts.JsxAttribute => element.kind !== ts.SyntaxKind.JsxSpreadAttribute,
      )
      .map((element) => {
        const valueOrExpression = element.initializer
          ? element.initializer
          : ts.createLiteral(true);
        return ts.createPropertyAssignment(element.name, valueOrExpression);
      }, []);

    return transformObjectLiteral(ts.createObjectLiteral(properties), context);
  }
}
function transformJsxOpeningElement(
  expression: ts.JsxSelfClosingElement | ts.JsxOpeningElement,
  context: TransformationContext,
  children?: ts.NodeArray<ts.JsxChild>,
): VisitorResult<ts.JsxSelfClosingElement | ts.JsxOpeningElement> {
  // <Something a="b" />
  // React.createElement(Something, {a = 'b'})
  const [library, create] = context.options.jsxFactory
    ? context.options.jsxFactory.split('.')
    : ['React', 'createElement'];
  const createElement = createTableIndexExpression(
    createIdentifier(library),
    createStringLiteral(create),
  );
  const tagName = expression.tagName.getText();

  const tag =
    tagName.toLowerCase() === tagName ? createStringLiteral(tagName) : createIdentifier(tagName);

  const props = transformJsxAttributesExpression(expression.attributes, context);

  if (children) {
    const childrenOrStringLiterals = children
      .filter((child) => !ts.isJsxText(child) || child.text.trim() !== '')
      .map((child) => (ts.isJsxText(child) ? ts.createStringLiteral(child.text.trim()) : child));

    // React.createElement is based on jsx factory - thus it change change
    // React.createElement(tag, props, ...childrenOrStringLiterals)
    return createCallExpression(
      createElement,
      [tag, props, ...transformArguments(context, childrenOrStringLiterals)],
      expression,
    );
  }

  return createCallExpression(createElement, [tag, props], expression);
}

function transformJsxElement(
  expression: ts.JsxElement | ts.JsxSelfClosingElement,
  context: TransformationContext,
): VisitorResult<ts.JsxElement | ts.JsxSelfClosingElement> {
  if (ts.isJsxSelfClosingElement(expression)) {
    return transformJsxOpeningElement(expression, context);
  }
  return transformJsxOpeningElement(expression.openingElement, context, expression.children);
}

const plugin: tstl.Plugin = {
  visitors: {
    [ts.SyntaxKind.JsxSelfClosingElement]: (node, context) => transformJsxElement(node, context),
    [ts.SyntaxKind.JsxElement]: (node, context) => transformJsxElement(node, context),
    [ts.SyntaxKind.JsxExpression]: (node, context) => {
      if (node.expression) {
        return context.transformExpression(node.expression);
      }
      return createNilLiteral();
    },
  },
} as Plugin;

export default plugin;
