# TypeScript AwesomeWM Config

## Install

Make sure you install the npm packages via `npm install` or `yarn install`.

### JSX

Currently TypeScriptToLua does not support JSX so you have to make a custom transform to convert JSX to Lua. I have created this transformer in `src/jsx.ts`.

Then to setup this this TypeScriptToLua you need to add the following to your `tsconfig.json`:

```
{
  ...rest of config
  "tstl": {
    ...rest of tstl settings
    "luaPlugins": [
      {"name": "./src/jsx.ts"}
    ]
  }
}
```

#### Custom JSX Factory

Then you need to create your own custom jsx factory to get everything working. To do so create a file like `src/helper/jsx-factory.ts` and `src/helper/jsx-factory.d.ts` (code and JSX global typings). Then update the `tsconfig.json` to use the JSX factory name:

```
{
  ...rest of config
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "jsxFactory.createElement"
  }
}
```

And boom with that you should be good to go!

## Working on the Config

Whenever you are working on the config make sure you are running `tstl --watch` (`yarn watch`) to watch for changes and transpile the code to lua.

The output of the transpiled lua code is found in `main.lua`.

**Note:** everything is bundled to one file based on the tsconfig for TypeScriptToLua.
