import Awesome from 'awesome/jsx';
import {
  Layout as UnwrappedLayout,
  Margin,
  MarginProps,
  Text as UnwrappedText,
} from './base';
import {Background as UnwrappedBackground, BackgroundProps} from './wibox';

function wrapMargin<T>(
  this: void,
  Component: JSX.FunctionComponent<T>
): JSX.FunctionComponent<T & MarginProps> {
  return ({margins, left, right, top, bottom, children, ...rest}) => {
    return (
      <Margin
        margins={margins}
        left={left}
        right={right}
        top={top}
        bottom={bottom}
      >
        <Component {...(rest as T)}>{children}</Component>
      </Margin>
    );
  };
}

function wrapBackground<T>(
  this: void,
  Component: JSX.FunctionComponent<T>
): JSX.FunctionComponent<T & BackgroundProps> {
  return ({
    shape,
    fg,
    bg,
    forced_height,
    forced_width,
    border_width,
    border_color,
    children,
    ...rest
  }) => {
    return (
      <Background
        shape={shape}
        fg={fg}
        bg={bg}
        forced_height={forced_height}
        forced_width={forced_width}
        border_width={border_width}
        border_color={border_color}
      >
        <Component {...(rest as T)}>{children}</Component>
      </Background>
    );
  };
}

function wrap<T>(
  component: JSX.FunctionComponent<T>
): JSX.FunctionComponent<T & BackgroundProps & MarginProps> {
  return wrapMargin(wrapBackground(component));
}

// function conditionalWrap<BASE, HOCPROPS>(
//   component: JSX.FunctionComponent<BASE>, conditionalOn: Set<string>
// ): JSX.FunctionComponent<BASE & HOCPROPS> {
//   return props => {
//     // does not render HOC is all values are undefined

//     let show = false;

//     for (const [key, value] of Object.entries(props)) {
//       if (conditionalOn.has(key)) {
//         show = true;
//         break;
//       }
//     }

//     if (show) {

//     }

//   };
// }

export const Background = wrapMargin(UnwrappedBackground);
export const Layout = wrapMargin(UnwrappedLayout);

export const Text = wrap(UnwrappedText);
// BackgroundTest({} as any);
