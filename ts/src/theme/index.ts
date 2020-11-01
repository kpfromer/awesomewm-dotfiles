import * as gtable from 'gears.table';
import defaultTheme from './default-theme';
import theme from './werewolf/index';

const finalTheme = {};
gtable.crush(finalTheme, defaultTheme.theme);
gtable.crush(finalTheme, theme.theme);
defaultTheme.awesome_overrides(finalTheme);
theme.awesome_overrides(finalTheme);

export default finalTheme;
