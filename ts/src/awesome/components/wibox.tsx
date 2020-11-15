import Awesome from 'awesome/jsx';
import * as wibox from 'wibox';

// Wibox Container

type BaseWibox = {id?: string};

export const Background: JSX.FunctionComponent<
  BaseWibox & {
    shape?: (this: void, cr: any, width: number, height: number) => void;
    bg?: string;

    forced_height?: number;
    forced_width?: number;

    border_width?: number;
    border_color?: string;
  }
> = ({children, ...rest}) => {
  return (
    <base {...rest} widget={wibox.container.background}>
      {children}
    </base>
  );
};
export const Constraint: JSX.FunctionComponent<
  BaseWibox & {
    /**
     * How to constraint the size.
     */
    strategy?: 'min' | 'max' | 'exact';
    /**
     * The maximum width of the widget. nil for no limit.
     */
    width?: number;
    /**
     * The maximum height of the widget. nil for no limit.
     */
    height?: number;
  }
> = ({children, ...rest}) => {
  return (
    <base {...rest} widget={wibox.container.constraint}>
      {children}
    </base>
  );
};
