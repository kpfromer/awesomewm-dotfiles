/**
 * @noSelf
 * @noResolution
 */
declare module 'beautiful' {
  export interface ThemeBase {
    /**
     * Hotkeys widget background color
     */
    hotkeys_bg: string;
    /**
     * Hotkeys widget foreground color
     */
    hotkeys_fg: string;
    /**
     * Hotkeys widget border width
     */
    hotkeys_border_width: string;
    /**
     * Hotkeys widget border color
     */
    hotkeys_border_color: string;
    /**
     * Hotkeys widget shape
     */
    hotkeys_shape: string;
    /**
     * Foreground color used for hotkey modifiers (Ctrl, Alt, Super, etc)
     */
    hotkeys_modifiers_fg: string;
    /**
     * Background color used for miscellaneous labels of hotkeys widget
     */
    hotkeys_label_bg: string;
    /**
     * Foreground color used for hotkey groups and other labels
     */
    hotkeys_label_fg: string;
    /**
     * Main hotkeys widget font
     */
    hotkeys_font: string;
    /**
     * Font used for hotkeys' descriptions
     */
    hotkeys_description_font: string;
    /**
     * Margin between hotkeys groups
     */
    hotkeys_group_margin: number;
    /**
     * The cornernw layout layoutbox icon
     */
    layout_cornernw: string;
    /**
     * The cornerne layout layoutbox icon
     */
    layout_cornerne: string;
    /**
     * The cornersw layout layoutbox icon
     */
    layout_cornersw: string;
    /**
     * The cornerse layout layoutbox icon
     */
    layout_cornerse: string;
    /**
     * The fairh layout layoutbox icon
     */
    layout_fairh: string;
    /**
     * The fairv layout layoutbox icon
     */
    layout_fairv: string;
    /**
     * The floating layout layoutbox icon
     */
    layout_floating: string;
    /**
     * The magnifier layout layoutbox icon
     */
    layout_magnifier: string;
    /**
     * The max layout layoutbox icon
     */
    layout_max: string;
    /**
     * The fullscreen layout layoutbox icon
     */
    layout_fullscreen: string;
    /**
     * The spiral layout layoutbox icon
     */
    layout_spiral: string;
    /**
     * The dwindle layout layoutbox icon
     */
    layout_dwindle: string;
    /**
     * The tile layout layoutbox icon
     */
    layout_tile: string;
    /**
     * The tile top layout layoutbox icon
     */
    layout_tiletop: string;
    /**
     * The tile bottom layout layoutbox icon
     */
    layout_tilebottom: string;
    /**
     * The tile left layout layoutbox icon
     */
    layout_tileleft: string;
    /**
     * The icon used for sub-menus
     */
    menu_submenu_icon: string;
    /**
     * The menu text font
     */
    menu_font: string;
    /**
     * The item height
     */
    menu_height: number;
    /**
     * The default menu width
     */
    menu_width: number;
    /**
     * The menu item border color
     */
    menu_border_color: string;
    /**
     * The menu item border width
     */
    menu_border_width: number;
    /**
     * The default focused item foreground (text) color
     */
    menu_fg_focus: string;
    /**
     * The default focused item background color
     */
    menu_bg_focus: string;
    /**
     * The default foreground (text) color
     */
    menu_fg_normal: string;
    /**
     * The default background color
     */
    menu_bg_normal: string;
    /**
     * The default sub-menu indicator if no menu_submenu_icon is provided
     */
    menu_submenu: string;
    /**
     * The snap outline background color
     */
    snap_bg: string;
    /**
     * The snap outline width
     */
    snap_border_width: number;
    /**
     * The snap outline shape
     */
    snap_shape: Function;
    /**
     * The gap between snapped contents
     */
    snapper_gap: string;
    /**
     * The resize cursor name
     */
    cursor_mouse_resize: string;
    /**
     * The move cursor name
     */
    cursor_mouse_move: string;
    /**
     * Honor the screen padding when maximizing
     */
    maximized_honor_padding: string;
    /**
     * Hide the border on fullscreen clients
     */
    fullscreen_hide_border: string;
    /**
     * Hide the border on maximized clients
     */
    maximized_hide_border: string;
    /**
     * The default background color
     */
    bg_normal: string;
    /**
     * The default foreground (text) color
     */
    fg_normal: string;
    /**
     * The prompt cursor foreground color
     */
    prompt_fg_cursor: string;
    /**
     * The prompt cursor background color
     */
    prompt_bg_cursor: string;
    /**
     * The prompt text font
     */
    prompt_font: string;
    /**
     * Show busy mouse cursor during spawn
     */
    enable_spawn_cursor: string;
    /**
     * The default master width factor
     */
    master_width_factor: string;
    /**
     * The default gap
     */
    useless_gap: number;
    /**
     * Enable gaps for a single client
     */
    gap_single_client: string;
    /**
     * The default fill policy
     */
    master_fill_policy: string;
    /**
     * The default number of master windows
     */
    master_count: string;
    /**
     * The default number of columns
     */
    column_count: string;
    /**
     * The titlebar foreground (text) color
     */
    titlebar_fg_normal: string;
    /**
     * The titlebar background color
     */
    titlebar_bg_normal: string;
    /**
     * The titlebar background image image
     */
    titlebar_bgimage_normal: string;
    /**
     * The titlebar foreground (text) color
     */
    titlebar_fg: string;
    /**
     * The titlebar background color
     */
    titlebar_bg: string;
    /**
     * The titlebar background image image
     */
    titlebar_bgimage: string;
    /**
     * The focused titlebar foreground (text) color
     */
    titlebar_fg_focus: string;
    /**
     * The focused titlebar background color
     */
    titlebar_bg_focus: string;
    /**
     * The focused titlebar background image image
     */
    titlebar_bgimage_focus: string;
    /**
     * floating_button_normal
     */
    titlebar_floating_button_normal: string;
    /**
     * maximized_button_normal
     */
    titlebar_maximized_button_normal: string;
    /**
     * minimize_button_normal
     */
    titlebar_minimize_button_normal: string;
    /**
     * minimize_button_normal_hover
     */
    titlebar_minimize_button_normal_hover: string;
    /**
     * minimize_button_normal_press
     */
    titlebar_minimize_button_normal_press: string;
    /**
     * close_button_normal
     */
    titlebar_close_button_normal: string;
    /**
     * close_button_normal_hover
     */
    titlebar_close_button_normal_hover: string;
    /**
     * close_button_normal_press
     */
    titlebar_close_button_normal_press: string;
    /**
     * ontop_button_normal
     */
    titlebar_ontop_button_normal: string;
    /**
     * sticky_button_normal
     */
    titlebar_sticky_button_normal: string;
    /**
     * floating_button_focus
     */
    titlebar_floating_button_focus: string;
    /**
     * maximized_button_focus
     */
    titlebar_maximized_button_focus: string;
    /**
     * minimize_button_focus
     */
    titlebar_minimize_button_focus: string;
    /**
     * minimize_button_focus_hover
     */
    titlebar_minimize_button_focus_hover: string;
    /**
     * minimize_button_focus_press
     */
    titlebar_minimize_button_focus_press: string;
    /**
     * close_button_focus
     */
    titlebar_close_button_focus: string;
    /**
     * close_button_focus_hover
     */
    titlebar_close_button_focus_hover: string;
    /**
     * close_button_focus_press
     */
    titlebar_close_button_focus_press: string;
    /**
     * ontop_button_focus
     */
    titlebar_ontop_button_focus: string;
    /**
     * sticky_button_focus
     */
    titlebar_sticky_button_focus: string;
    /**
     * floating_button_normal_active
     */
    titlebar_floating_button_normal_active: string;
    /**
     * floating_button_normal_active_hover
     */
    titlebar_floating_button_normal_active_hover: string;
    /**
     * floating_button_normal_active_press
     */
    titlebar_floating_button_normal_active_press: string;
    /**
     * maximized_button_normal_active
     */
    titlebar_maximized_button_normal_active: string;
    /**
     * maximized_button_normal_active_hover
     */
    titlebar_maximized_button_normal_active_hover: string;
    /**
     * maximized_button_normal_active_press
     */
    titlebar_maximized_button_normal_active_press: string;
    /**
     * ontop_button_normal_active
     */
    titlebar_ontop_button_normal_active: string;
    /**
     * ontop_button_normal_active_hover
     */
    titlebar_ontop_button_normal_active_hover: string;
    /**
     * ontop_button_normal_active_press
     */
    titlebar_ontop_button_normal_active_press: string;
    /**
     * sticky_button_normal_active
     */
    titlebar_sticky_button_normal_active: string;
    /**
     * sticky_button_normal_active_hover
     */
    titlebar_sticky_button_normal_active_hover: string;
    /**
     * sticky_button_normal_active_press
     */
    titlebar_sticky_button_normal_active_press: string;
    /**
     * floating_button_focus_active
     */
    titlebar_floating_button_focus_active: string;
    /**
     * floating_button_focus_active_hover
     */
    titlebar_floating_button_focus_active_hover: string;
    /**
     * floating_button_focus_active_press
     */
    titlebar_floating_button_focus_active_press: string;
    /**
     * maximized_button_focus_active
     */
    titlebar_maximized_button_focus_active: string;
    /**
     * maximized_button_focus_active_hover
     */
    titlebar_maximized_button_focus_active_hover: string;
    /**
     * maximized_button_focus_active_press
     */
    titlebar_maximized_button_focus_active_press: string;
    /**
     * ontop_button_focus_active
     */
    titlebar_ontop_button_focus_active: string;
    /**
     * ontop_button_focus_active_hover
     */
    titlebar_ontop_button_focus_active_hover: string;
    /**
     * ontop_button_focus_active_press
     */
    titlebar_ontop_button_focus_active_press: string;
    /**
     * sticky_button_focus_active
     */
    titlebar_sticky_button_focus_active: string;
    /**
     * sticky_button_focus_active_hover
     */
    titlebar_sticky_button_focus_active_hover: string;
    /**
     * sticky_button_focus_active_press
     */
    titlebar_sticky_button_focus_active_press: string;
    /**
     * floating_button_normal_inactive
     */
    titlebar_floating_button_normal_inactive: string;
    /**
     * floating_button_normal_inactive_hover
     */
    titlebar_floating_button_normal_inactive_hover: string;
    /**
     * floating_button_normal_inactive_press
     */
    titlebar_floating_button_normal_inactive_press: string;
    /**
     * maximized_button_normal_inactive
     */
    titlebar_maximized_button_normal_inactive: string;
    /**
     * maximized_button_normal_inactive_hover
     */
    titlebar_maximized_button_normal_inactive_hover: string;
    /**
     * maximized_button_normal_inactive_press
     */
    titlebar_maximized_button_normal_inactive_press: string;
    /**
     * ontop_button_normal_inactive
     */
    titlebar_ontop_button_normal_inactive: string;
    /**
     * ontop_button_normal_inactive_hover
     */
    titlebar_ontop_button_normal_inactive_hover: string;
    /**
     * ontop_button_normal_inactive_press
     */
    titlebar_ontop_button_normal_inactive_press: string;
    /**
     * sticky_button_normal_inactive
     */
    titlebar_sticky_button_normal_inactive: string;
    /**
     * sticky_button_normal_inactive_hover
     */
    titlebar_sticky_button_normal_inactive_hover: string;
    /**
     * sticky_button_normal_inactive_press
     */
    titlebar_sticky_button_normal_inactive_press: string;
    /**
     * floating_button_focus_inactive
     */
    titlebar_floating_button_focus_inactive: string;
    /**
     * floating_button_focus_inactive_hover
     */
    titlebar_floating_button_focus_inactive_hover: string;
    /**
     * floating_button_focus_inactive_press
     */
    titlebar_floating_button_focus_inactive_press: string;
    /**
     * maximized_button_focus_inactive
     */
    titlebar_maximized_button_focus_inactive: string;
    /**
     * maximized_button_focus_inactive_hover
     */
    titlebar_maximized_button_focus_inactive_hover: string;
    /**
     * maximized_button_focus_inactive_press
     */
    titlebar_maximized_button_focus_inactive_press: string;
    /**
     * ontop_button_focus_inactive
     */
    titlebar_ontop_button_focus_inactive: string;
    /**
     * ontop_button_focus_inactive_hover
     */
    titlebar_ontop_button_focus_inactive_hover: string;
    /**
     * ontop_button_focus_inactive_press
     */
    titlebar_ontop_button_focus_inactive_press: string;
    /**
     * sticky_button_focus_inactive
     */
    titlebar_sticky_button_focus_inactive: string;
    /**
     * sticky_button_focus_inactive_hover
     */
    titlebar_sticky_button_focus_inactive_hover: string;
    /**
     * sticky_button_focus_inactive_press
     */
    titlebar_sticky_button_focus_inactive_press: string;
    /**
     * The tooltip border color
     */
    tooltip_border_color: string;
    /**
     * The tooltip background color
     */
    tooltip_bg: string;
    /**
     * The tooltip foregound (text) color
     */
    tooltip_fg: string;
    /**
     * The tooltip font
     */
    tooltip_font: string;
    /**
     * The tooltip border width
     */
    tooltip_border_width: number;
    /**
     * The tooltip opacity
     */
    tooltip_opacity: number;
    /**
     * The tooltip margins
     */
    tooltip_gaps: number;
    /**
     * The default tooltip shape
     */
    tooltip_shape: Function;
    /**
     * The default tooltip alignment
     */
    tooltip_align: string;
    /**
     * If the wibar needs to be stretched to fill the screen
     */
    wibar_stretch: string;
    /**
     * The wibar border width
     */
    wibar_border_width: string;
    /**
     * The wibar border color
     */
    wibar_border_color: string;
    /**
     * If the wibar is to be on top of other windows
     */
    wibar_ontop: string;
    /**
     * The wibar’s mouse cursor
     */
    wibar_cursor: string;
    /**
     * The wibar opacity, between 0 and 1
     */
    wibar_opacity: string;
    /**
     * The window type (desktop, normal, dock, …)
     */
    wibar_type: string;
    /**
     * The wibar’s width
     */
    wibar_width: string;
    /**
     * The wibar’s height
     */
    wibar_height: string;
    /**
     * The wibar’s background color
     */
    wibar_bg: string;
    /**
     * The wibar’s background image
     */
    wibar_bgimage: string;
    /**
     * The wibar’s foreground (text) color
     */
    wibar_fg: string;
    /**
     * The wibar’s shape
     */
    wibar_shape: string;
    /**
     * The generic calendar style table
     */
    calendar_style: string;
    /**
     * The default foreground (text) color
     */
    layoutlist_fg_normal: string;
    /**
     * The default background color
     */
    layoutlist_bg_normal: string;
    /**
     * The selected layout foreground (text) color
     */
    layoutlist_fg_selected: string;
    /**
     * The selected layout background color
     */
    layoutlist_bg_selected: string;
    /**
     * Disable the layout icons (only show the name label)
     */
    layoutlist_disable_icon: string;
    /**
     * Disable the layout name label (only show the icon)
     */
    layoutlist_disable_name: string;
    /**
     * The layoutlist font
     */
    layoutlist_font: string;
    /**
     * The selected layout alignment
     */
    layoutlist_align: string;
    /**
     * The selected layout title font
     */
    layoutlist_font_selected: string;
    /**
     * The space between the layouts
     */
    layoutlist_spacing: string;
    /**
     * The default layoutlist elements shape
     */
    layoutlist_shape: string;
    /**
     * The default layoutlist elements border width
     */
    layoutlist_shape_border_width: string;
    /**
     * The default layoutlist elements border color
     */
    layoutlist_shape_border_color: string;
    /**
     * The selected layout shape
     */
    layoutlist_shape_selected: string;
    /**
     * The selected layout border width
     */
    layoutlist_shape_border_width_selected: string;
    /**
     * The selected layout border color
     */
    layoutlist_shape_border_color_selected: string;
    /**
     * The prompt foreground color
     */
    prompt_fg: string;
    /**
     * The prompt background color
     */
    prompt_bg: string;
    /**
     * The tag list main foreground (text) color
     */
    taglist_fg_focus: string;
    /**
     * The tag list main background color
     */
    taglist_bg_focus: string;
    /**
     * The tag list urgent elements foreground (text) color
     */
    taglist_fg_urgent: string;
    /**
     * The tag list urgent elements background color
     */
    taglist_bg_urgent: string;
    /**
     * The tag list occupied elements background color
     */
    taglist_bg_occupied: string;
    /**
     * The tag list occupied elements foreground (text) color
     */
    taglist_fg_occupied: string;
    /**
     * The tag list empty elements background color
     */
    taglist_bg_empty: string;
    /**
     * The tag list empty elements foreground (text) color
     */
    taglist_fg_empty: string;
    /**
     * The tag list volatile elements background color
     */
    taglist_bg_volatile: string;
    /**
     * The tag list volatile elements foreground (text) color
     */
    taglist_fg_volatile: string;
    /**
     * The selected elements background image
     */
    taglist_squares_sel: string;
    /**
     * The unselected elements background image
     */
    taglist_squares_unsel: string;
    /**
     * The selected empty elements background image
     */
    taglist_squares_sel_empty: string;
    /**
     * The unselected empty elements background image
     */
    taglist_squares_unsel_empty: string;
    /**
     * If the background images can be resized
     */
    taglist_squares_resize: string;
    /**
     * Do not display the tag icons, even if they are set
     */
    taglist_disable_icon: string;
    /**
     * The taglist font
     */
    taglist_font: string;
    /**
     * The space between the taglist elements
     */
    taglist_spacing: number;
    /**
     * The main shape used for the elements
     */
    taglist_shape: string;
    /**
     * The shape elements border width
     */
    taglist_shape_border_width: string;
    /**
     * The elements shape border color
     */
    taglist_shape_border_color: string;
    /**
     * The shape used for the empty elements
     */
    taglist_shape_empty: string;
    /**
     * The shape used for the empty elements border width
     */
    taglist_shape_border_width_empty: string;
    /**
     * The empty elements shape border color
     */
    taglist_shape_border_color_empty: string;
    /**
     * The shape used for the selected elements
     */
    taglist_shape_focus: string;
    /**
     * The shape used for the selected elements border width
     */
    taglist_shape_border_width_focus: string;
    /**
     * The selected elements shape border color
     */
    taglist_shape_border_color_focus: string;
    /**
     * The shape used for the urgent elements
     */
    taglist_shape_urgent: string;
    /**
     * The shape used for the urgent elements border width
     */
    taglist_shape_border_width_urgent: string;
    /**
     * The urgents elements shape border color
     */
    taglist_shape_border_color_urgent: string;
    /**
     * The shape used for the volatile elements
     */
    taglist_shape_volatile: string;
    /**
     * The shape used for the volatile elements border width
     */
    taglist_shape_border_width_volatile: string;
    /**
     * The volatile elements shape border color
     */
    taglist_shape_border_color_volatile: string;
    /**
     * The default foreground (text) color
     */
    tasklist_fg_normal: string;
    /**
     * The default background color
     */
    tasklist_bg_normal: string;
    /**
     * The focused client foreground (text) color
     */
    tasklist_fg_focus: string;
    /**
     * The focused client background color
     */
    tasklist_bg_focus: string;
    /**
     * The urgent clients foreground (text) color
     */
    tasklist_fg_urgent: string;
    /**
     * The urgent clients background color
     */
    tasklist_bg_urgent: string;
    /**
     * The minimized clients foreground (text) color
     */
    tasklist_fg_minimize: string;
    /**
     * The minimized clients background color
     */
    tasklist_bg_minimize: string;
    /**
     * The elements default background image
     */
    tasklist_bg_image_normal: string;
    /**
     * The focused client background image
     */
    tasklist_bg_image_focus: string;
    /**
     * The urgent clients background image
     */
    tasklist_bg_image_urgent: string;
    /**
     * The minimized clients background image
     */
    tasklist_bg_image_minimize: string;
    /**
     * Disable the tasklist client icons
     */
    tasklist_disable_icon: string;
    /**
     * Disable the tasklist client titles
     */
    tasklist_disable_task_name: string;
    /**
     * Disable the extra tasklist client property notification icons
     */
    tasklist_plain_task_name: string;
    /**
     * Extra tasklist client property notification icon for clients with the sticky property set
     */
    tasklist_sticky: string;
    /**
     * Extra tasklist client property notification icon for clients with the ontop property set
     */
    tasklist_ontop: string;
    /**
     * Extra tasklist client property notification icon for clients with the above property set
     */
    tasklist_above: string;
    /**
     * Extra tasklist client property notification icon for clients with the below property set
     */
    tasklist_below: string;
    /**
     * Extra tasklist client property notification icon for clients with the floating property set
     */
    tasklist_floating: string;
    /**
     * Extra tasklist client property notification icon for clients with the maximized property set
     */
    tasklist_maximized: string;
    /**
     * Extra tasklist client property notification icon for clients with the maximized_horizontal property set
     */
    tasklist_maximized_horizontal: string;
    /**
     * Extra tasklist client property notification icon for clients with the maximized_vertical property set
     */
    tasklist_maximized_vertical: string;
    /**
     * The tasklist font
     */
    tasklist_font: string;
    /**
     * The focused client alignment
     */
    tasklist_align: string;
    /**
     * The focused client title alignment
     */
    tasklist_font_focus: string;
    /**
     * The minimized clients font
     */
    tasklist_font_minimized: string;
    /**
     * The urgent clients font
     */
    tasklist_font_urgent: string;
    /**
     * The space between the tasklist elements
     */
    tasklist_spacing: string;
    /**
     * The default tasklist elements shape
     */
    tasklist_shape: string;
    /**
     * The default tasklist elements border width
     */
    tasklist_shape_border_width: string;
    /**
     * The default tasklist elements border color
     */
    tasklist_shape_border_color: string;
    /**
     * The focused client shape
     */
    tasklist_shape_focus: string;
    /**
     * The focused client border width
     */
    tasklist_shape_border_width_focus: string;
    /**
     * The focused client border color
     */
    tasklist_shape_border_color_focus: string;
    /**
     * The minimized clients shape
     */
    tasklist_shape_minimized: string;
    /**
     * The minimized clients border width
     */
    tasklist_shape_border_width_minimized: string;
    /**
     * The minimized clients border color
     */
    tasklist_shape_border_color_minimized: string;
    /**
     * The urgent clients shape
     */
    tasklist_shape_urgent: string;
    /**
     * The urgent clients border width
     */
    tasklist_shape_border_width_urgent: string;
    /**
     * The urgent clients border color
     */
    tasklist_shape_border_color_urgent: string;
    /**
     * The default font
     */
    font: string;
    /**
     * The default focused element background color
     */
    bg_focus: string;
    /**
     * The default urgent element background color
     */
    bg_urgent: string;
    /**
     * The default minimized element background color
     */
    bg_minimize: string;
    /**
     * The system tray background color
     */
    bg_systray: string;
    /**
     * The default focused element foreground (text) color
     */
    fg_focus: string;
    /**
     * The default urgent element foreground (text) color
     */
    fg_urgent: string;
    /**
     * The default minimized element foreground (text) color
     */
    fg_minimize: string;
    /**
     * The fallback border width
     */
    border_width: number;
    /**
     * The fallback border color
     */
    border_color: string;
    /**
     * The wallpaper path
     */
    wallpaper: string;
    /**
     * The icon theme name
     */
    icon_theme: string;
    /**
     * The Awesome icon path
     */
    awesome_icon: string;
    /**
     * Menubar normal text color
     */
    menubar_fg_normal: string;
    /**
     * Menubar normal background color
     */
    menubar_bg_normal: string;
    /**
     * Menubar border width
     */
    menubar_border_width: string;
    /**
     * Menubar border color
     */
    menubar_border_color: string;
    /**
     * Menubar selected item text color
     */
    menubar_fg_focus: string;
    /**
     * Menubar selected item background color
     */
    menubar_bg_focus: string;
    /**
     * The maximum notification width
     */
    notification_max_width: string;
    /**
     * The maximum notification position
     */
    notification_position: string;
    /**
     * Whether or not to underline the action name
     */
    notification_action_underline_normal: string;
    /**
     * Whether or not to underline the selected action name
     */
    notification_action_underline_selected: string;
    /**
     * Whether or not the action label should be shown
     */
    notification_action_icon_only: string;
    /**
     * Whether or not the action icon should be shown
     */
    notification_action_label_only: string;
    /**
     * The shape used for a normal action
     */
    notification_action_shape_normal: string;
    /**
     * The shape used for a selected action
     */
    notification_action_shape_selected: string;
    /**
     * The shape border color for normal actions
     */
    notification_action_shape_border_color_normal: string;
    /**
     * The shape border color for selected actions
     */
    notification_action_shape_border_color_selected: string;
    /**
     * The shape border width for normal actions
     */
    notification_action_shape_border_width_normal: string;
    /**
     * The shape border width for selected actions
     */
    notification_action_shape_border_width_selected: string;
    /**
     * The action icon size
     */
    notification_action_icon_size_normal: string;
    /**
     * The selected action icon size
     */
    notification_action_icon_size_selected: string;
    /**
     * The background color for normal actions
     */
    notification_action_bg_normal: string;
    /**
     * The background color for selected actions
     */
    notification_action_bg_selected: string;
    /**
     * The foreground color for normal actions
     */
    notification_action_fg_normal: string;
    /**
     * The foreground color for selected actions
     */
    notification_action_fg_selected: string;
    /**
     * The background image for normal actions
     */
    notification_action_bgimage_normal: string;
    /**
     * The background image for selected actions
     */
    notification_action_bgimage_selected: string;
    /**
     * The shape used for a normal notification
     */
    notification_shape_normal: string;
    /**
     * The shape used for a selected notification
     */
    notification_shape_selected: string;
    /**
     * The shape border color for normal notifications
     */
    notification_shape_border_color_normal: string;
    /**
     * The shape border color for selected notifications
     */
    notification_shape_border_color_selected: string;
    /**
     * The shape border width for normal notifications
     */
    notification_shape_border_width_normal: string;
    /**
     * The shape border width for selected notifications
     */
    notification_shape_border_width_selected: string;
    /**
     * The notification icon size
     */
    notification_icon_size_normal: string;
    /**
     * The selected notification icon size
     */
    notification_icon_size_selected: string;
    /**
     * The background color for normal notifications
     */
    notification_bg_normal: string;
    /**
     * The background color for selected notifications
     */
    notification_bg_selected: string;
    /**
     * The foreground color for normal notifications
     */
    notification_fg_normal: string;
    /**
     * The foreground color for selected notifications
     */
    notification_fg_selected: string;
    /**
     * The background image for normal notifications
     */
    notification_bgimage_normal: string;
    /**
     * The background image for selected notifications
     */
    notification_bgimage_selected: string;
    /**
     * Notifications font
     */
    notification_font: string;
    /**
     * Notifications background color
     */
    notification_bg: string;
    /**
     * Notifications foreground color
     */
    notification_fg: string;
    /**
     * Notifications border width
     */
    notification_border_width: number;
    /**
     * Notifications border color
     */
    notification_border_color: string;
    /**
     * Notifications shape
     */
    notification_shape: string;
    /**
     * Notifications opacity
     */
    notification_opacity: string;
    /**
     * The margins inside of the notification widget (or popup)
     */
    notification_margin: number;
    /**
     * Notifications width
     */
    notification_width: string;
    /**
     * Notifications height
     */
    notification_height: string;
    /**
     * The spacing between the notifications
     */
    notification_spacing: number;
    /**
     * The default way to resize the icon
     */
    notification_icon_resize_strategy: string;
    /**
     * The progressbar border background color
     */
    arcchart_border_color: string;
    /**
     * The progressbar foreground color
     */
    arcchart_color: string;
    /**
     * The progressbar border width
     */
    arcchart_border_width: string;
    /**
     * The padding between the outline and the progressbar
     */
    arcchart_paddings: string;
    /**
     * The arc thickness
     */
    arcchart_thickness: string;
    /**
     * The progressbar border background color
     */
    radialprogressbar_border_color: string;
    /**
     * The progressbar foreground color
     */
    radialprogressbar_color: string;
    /**
     * The progressbar border width
     */
    radialprogressbar_border_width: string;
    /**
     * The padding between the outline and the progressbar
     */
    radialprogressbar_paddings: string;
    /**
     * The calendar font
     */
    calendar_font: string;
    /**
     * The calendar spacing
     */
    calendar_spacing: string;
    /**
     * Display the calendar week numbers
     */
    calendar_week_numbers: string;
    /**
     * Start the week on Sunday
     */
    calendar_start_sunday: string;
    /**
     * Format the weekdays with three characters instead of two
     */
    calendar_long_weekdays: string;
    /**
     * The outer (unchecked area) border width
     */
    checkbox_border_width: string;
    /**
     * The outer (unchecked area) background color, pattern or gradient
     */
    checkbox_bg: string;
    /**
     * The outer (unchecked area) border color
     */
    checkbox_border_color: string;
    /**
     * The checked part border color
     */
    checkbox_check_border_color: string;
    /**
     * The checked part border width
     */
    checkbox_check_border_width: string;
    /**
     * The checked part filling color
     */
    checkbox_check_color: string;
    /**
     * The outer (unchecked area) shape
     */
    checkbox_shape: string;
    /**
     * The checked part shape
     */
    checkbox_check_shape: string;
    /**
     * The padding between the outline and the progressbar
     */
    checkbox_paddings: string;
    /**
     * The checkbox color
     */
    checkbox_color: string;
    /**
     * The graph background color
     */
    graph_bg: string;
    /**
     * The graph foreground color
     */
    graph_fg: string;
    /**
     * The graph border color
     */
    graph_border_color: string;
    /**
     * The border color
     */
    piechart_border_color: string;
    /**
     * The pie elements border width
     */
    piechart_border_width: string;
    /**
     * The pie chart colors
     */
    piechart_colors: string;
    /**
     * The progressbar background color
     */
    progressbar_bg: string;
    /**
     * The progressbar foreground color
     */
    progressbar_fg: string;
    /**
     * The progressbar shape
     */
    progressbar_shape: string;
    /**
     * The progressbar border color
     */
    progressbar_border_color: string;
    /**
     * The progressbar outer border width
     */
    progressbar_border_width: string;
    /**
     * The progressbar inner shape
     */
    progressbar_bar_shape: string;
    /**
     * The progressbar bar border width
     */
    progressbar_bar_border_width: string;
    /**
     * The progressbar bar border color
     */
    progressbar_bar_border_color: string;
    /**
     * The progressbar margins
     */
    progressbar_margins: string;
    /**
     * The progressbar padding
     */
    progressbar_paddings: string;
    /**
     * The separator thickness
     */
    separator_thickness: string;
    /**
     * The separator border color
     */
    separator_border_color: string;
    /**
     * The separator border width
     */
    separator_border_width: string;
    /**
     * The relative percentage covered by the bar
     */
    separator_span_ratio: string;
    /**
     * The separator’s color
     */
    separator_color: string;
    /**
     * The separator’s shape
     */
    separator_shape: string;
    /**
     * The bar (background) border width
     */
    slider_bar_border_width: string;
    /**
     * The bar (background) border color
     */
    slider_bar_border_color: string;
    /**
     * The handle border_color
     */
    slider_handle_border_color: string;
    /**
     * The handle border width
     */
    slider_handle_border_width: string;
    /**
     * The handle width
     */
    slider_handle_width: string;
    /**
     * The handle color
     */
    slider_handle_color: string;
    /**
     * The handle shape
     */
    slider_handle_shape: string;
    /**
     * The bar (background) shape
     */
    slider_bar_shape: string;
    /**
     * The bar (background) height
     */
    slider_bar_height: string;
    /**
     * The bar (background) margins
     */
    slider_bar_margins: string;
    /**
     * The slider handle margins
     */
    slider_handle_margins: string;
    /**
     * The bar (background) color
     */
    slider_bar_color: string;
    /**
     * The bar (active) color
     */
    slider_bar_active_color: string;
    /**
     * The systray icon spacing
     */
    systray_icon_spacing: number;
    /**
     * The border color when the client is marked
     */
    border_color_marked: string;
    /**
     * The fallback border color when the client is floating
     */
    border_color_floating: string;
    /**
     * The fallback border color when the client is maximized
     */
    border_color_maximized: string;
    /**
     * The fallback border color when the client is fullscreen
     */
    border_color_fullscreen: string;
    /**
     * The border color when the client is active
     */
    border_color_active: string;
    /**
     * The border color when the client is not active
     */
    border_color_normal: string;
    /**
     * The border color when the client has the urgent property set
     */
    border_color_urgent: string;
    /**
     * The border color when the client is not active and new
     */
    border_color_new: string;
    /**
     * The border color when the (floating) client is active
     */
    border_color_floating_active: string;
    /**
     * The border color when the (floating) client is not active
     */
    border_color_floating_normal: string;
    /**
     * The border color when the (floating) client has the urgent property set
     */
    border_color_floating_urgent: string;
    /**
     * The border color when the (floating) client is not active and new
     */
    border_color_floating_new: string;
    /**
     * The border color when the (maximized) client is active
     */
    border_color_maximized_active: string;
    /**
     * The border color when the (maximized) client is not active
     */
    border_color_maximized_normal: string;
    /**
     * The border color when the (maximized) client has the urgent property set
     */
    border_color_maximized_urgent: string;
    /**
     * The border color when the (maximized) client is not active and new
     */
    border_color_maximized_new: string;
    /**
     * The border color when the (fullscreen) client is active
     */
    border_color_fullscreen_active: string;
    /**
     * The border color when the (fullscreen) client is not active
     */
    border_color_fullscreen_normal: string;
    /**
     * The border color when the (fullscreen) client has the urgent property set
     */
    border_color_fullscreen_urgent: string;
    /**
     * The border color when the (fullscreen) client is not active and new
     */
    border_color_fullscreen_new: string;
    /**
     * The fallback border width when the client is floating
     */
    border_width_floating: string;
    /**
     * The fallback border width when the client is maximized
     */
    border_width_maximized: string;
    /**
     * The client border width for the normal clients
     */
    border_width_normal: string;
    /**
     * The client border width for the active client
     */
    border_width_active: string;
    /**
     * The client border width for the urgent clients
     */
    border_width_urgent: string;
    /**
     * The client border width for the new clients
     */
    border_width_new: string;
    /**
     * The client border width for the normal floating clients
     */
    border_width_floating_normal: string;
    /**
     * The client border width for the active floating client
     */
    border_width_floating_active: string;
    /**
     * The client border width for the urgent floating clients
     */
    border_width_floating_urgent: string;
    /**
     * The client border width for the new floating clients
     */
    border_width_floating_new: string;
    /**
     * The client border width for the normal maximized clients
     */
    border_width_maximized_normal: string;
    /**
     * The client border width for the active maximized client
     */
    border_width_maximized_active: string;
    /**
     * The client border width for the urgent maximized clients
     */
    border_width_maximized_urgent: string;
    /**
     * The client border width for the new maximized clients
     */
    border_width_maximized_new: string;
    /**
     * The client border width for the normal fullscreen clients
     */
    border_width_fullscreen_normal: string;
    /**
     * The client border width for the active fullscreen client
     */
    border_width_fullscreen_active: string;
    /**
     * The client border width for the urgent fullscreen clients
     */
    border_width_fullscreen_urgent: string;
    /**
     * The client border width for the new fullscreen clients
     */
    border_width_fullscreen_new: string;
    /**
     * The client opacity for the normal clients
     */
    opacity_normal: string;
    /**
     * The client opacity for the active client
     */
    opacity_active: string;
    /**
     * The client opacity for the urgent clients
     */
    opacity_urgent: string;
    /**
     * The client opacity for the new clients
     */
    opacity_new: string;
    /**
     * The client opacity for the normal floating clients
     */
    opacity_floating_normal: string;
    /**
     * The client opacity for the active floating client
     */
    opacity_floating_active: string;
    /**
     * The client opacity for the urgent floating clients
     */
    opacity_floating_urgent: string;
    /**
     * The client opacity for the new floating clients
     */
    opacity_floating_new: string;
    /**
     * The client opacity for the normal maximized clients
     */
    opacity_maximized_normal: string;
    /**
     * The client opacity for the active maximized client
     */
    opacity_maximized_active: string;
    /**
     * The client opacity for the urgent maximized clients
     */
    opacity_maximized_urgent: string;
    /**
     * The client opacity for the new maximized clients
     */
    opacity_maximized_new: string;
    /**
     * The client opacity for the normal fullscreen clients
     */
    opacity_fullscreen_normal: string;
    /**
     * The client opacity for the active fullscreen client
     */
    opacity_fullscreen_active: string;
    /**
     * The client opacity for the urgent fullscreen clients
     */
    opacity_fullscreen_urgent: string;
    /**
     * The client opacity for the new fullscreen clients
     */
    opacity_fullscreen_new: string;
  }

  export type Theme<R = {}> = R & ThemeBase;

  // function log(): string;

  /**
   * https://awesomewm.org/doc/api/libraries/beautiful.html#init
   * Function that initializes the theme settings. Should be run at the beginning of the awesome configuration file (normally rc.lua).
   */
  function init(config: Partial<Theme>): void;

  /**
   * @noSelf
   */
  interface GTK {
    /**
     * TODO: better typing
     * https://awesomewm.org/doc/api/libraries/beautiful.gtk.html
     */
    get_theme_variables: () => {[key: string]: string};
  }
  export const gtk: GTK;

  /**
   * @noSelf
   */
  interface XResources {
    apply_dpi: (dpi: number) => number;
    get_current_theme: () => {[key: string]: string};
  }
  export const xresources: XResources;

  export const border_focus: string;
  export const border_normal: string;
  export const border_width: number;
  export const border_marked: string;

  // CUSTOM types from theme
  export const useless_gap: number;
  export const client_radius: number;

  export const awesome_icon: string;

  export const titlebar_size: number;
  export const transparent: string;
  export const fg_normal: string;

  export const background: string;
  export const notification_margin: number;

  export const groups_bg: string;
  export const groups_title_bg: string;

  // Events
  export const leave_event: string;
  export const press_event: string;
  export const release_event: string;

  export const groups_radius: number;
  export const accent: string;
}
