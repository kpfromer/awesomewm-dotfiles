import * as jsxFactory from '../jsx-factory';
import * as naughty from 'naughty';

// Naughty

type BaseNaughty = {};

// TODO: align
export const NaughtyIcon: JSX.FunctionComponent<
  BaseNaughty & {
    align?: string;
    resize_strategy?: 'scale' | 'center' | 'resize';
  }
> = ({children, ...rest}) => {
  return <base {...rest} widget={naughty.widget.icon} />;
};

export const NaughtyTitle: JSX.FunctionComponent<
  BaseNaughty & {
    align?: string;
  }
> = ({children, ...rest}) => {
  return <base {...rest} widget={naughty.widget.title} />;
};

export const NaughtyMessage: JSX.FunctionComponent<
  BaseNaughty & {
    align?: string;
  }
> = ({children, ...rest}) => {
  return <base {...rest} widget={naughty.widget.message} />;
};
