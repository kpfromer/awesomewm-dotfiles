import {Theme} from 'beautiful';
import * as gtable from 'gears.table';
import defaultTheme from './default-theme';
import theme from './werewolf/index';

export type CustomTheme = Theme<{
  background: string;
  background_light: string;
  transparent: string;
  icons: string;
  font_bold: string;
  system_black_dark: string;
  system_black_light: string;
  system_red_dark: string;
  system_red_light: string;
  system_green_dark: string;
  system_green_light: string;
  system_yellow_dark: string;
  system_yellow_light: string;
  system_blue_dark: string;
  system_blue_light: string;
  system_magenta_dark: string;
  system_magenta_light: string;
  system_cyan_dark: string;
  system_cyan_light: string;
  system_white_dark: string;
  system_white_light: string;
  accent: string;

  dir: string;
  groups_title_bg: string;
  groups_bg: string;
  groups_radius: number;
  leave_event: string;
  enter_event: string;
  press_event: string;
  release_event: string;
  border_focus: string;
  border_normal: string;
  border_marked: string;
  border_radius: number;
  client_radius: number;
  notification_icon_size: number;
  titlebar_size: number;
}>;

const finalTheme: Partial<CustomTheme> = {};

gtable.crush(finalTheme, defaultTheme.theme);
gtable.crush(finalTheme, theme.theme);
defaultTheme.awesome_overrides(finalTheme);
theme.awesome_overrides(finalTheme);

export default finalTheme;
