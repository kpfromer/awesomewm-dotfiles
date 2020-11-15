import Awesome from 'awesome/jsx';
import * as awful from 'awful';
import * as wibox from 'wibox';
import * as gears from 'gears';
import * as beautiful from 'beautiful';
import {Margin, Tooltip} from 'awesome/components/base';
import {ButtonPressHandler, Clickable} from '../../widgets/clickable-container';
import {TextClock} from '../panel-components';
import {PanelOutline} from '../panel-outline';
const dpi = beautiful.xresources.apply_dpi;

const PlainClock: JSX.FunctionComponent<{
  militaryTime?: boolean;
  font: string;
  onButtonPress?: ButtonPressHandler;
}> = ({militaryTime = false, font, onButtonPress}) => {
  return (
    <Clickable onButtonPress={onButtonPress}>
      <Margin margins={dpi(7)}>
        <TextClock
          format={`<span font="${font}">${
            militaryTime ? '%H:%M' : '%I:%M %p'
          }</span>`}
        />
      </Margin>
    </Clickable>
  );
};

const Calendar: JSX.FunctionComponent<{font: string; screen: awful.Screen}> = ({
  font,
  screen,
}) => {
  // TODO: Extract out to component
  return awful.widget.calendar_popup.month({
    screen,
    font,
    start_sunday: true,
    spacing: dpi(5),
    long_weekdays: true,
    margin: dpi(5),
    style_month: {
      border_width: dpi(0),
      bg_color: beautiful.background,
      padding: dpi(20),
      shape: function (this: void, cr: any, width: number, height: number) {
        gears.shape.partially_rounded_rect(
          cr,
          width,
          height,
          true,
          true,
          true,
          true,
          beautiful.groups_radius
        );
      },
    },
    style_header: {
      border_width: 0,
      bg_color: beautiful.transparent,
    },
    style_weekday: {
      border_width: 0,
      bg_color: beautiful.transparent,
    },
    style_normal: {
      border_width: 0,
      bg_color: beautiful.transparent,
    },
    style_focus: {
      border_width: dpi(0),
      border_color: beautiful.fg_normal,
      bg_color: beautiful.accent,
      shape: function (this: void, cr: any, width: number, height: number) {
        gears.shape.partially_rounded_rect(
          cr,
          width,
          height,
          true,
          true,
          true,
          true,
          dpi(4)
        );
      },
    },
  }) as any;
};

function getOridinal(this: void, day = os.date('%d')): string {
  let oridnal = 'th';

  const lastDigit = string.sub(day, -1);

  if (lastDigit === '1' && day !== '11') {
    oridnal = 'st';
  } else if (lastDigit === '2' && day !== '12') {
    oridnal = 'nd';
  } else if (lastDigit === '3' && day !== '13') {
    oridnal = 'rd';
  }

  return oridnal;
}

export const Clock: JSX.FunctionComponent<{
  militaryTime?: boolean;
  font: string;
  screen: awful.Screen;
  calendarPosition?: string;
}> = ({militaryTime = false, font, screen, calendarPosition = 'tr'}) => {
  const openClockToolTip: ButtonPressHandler = button => {
    if ((screen as any).clockTooltip) {
      const clockTooltip = (screen as any).clockTooltip as wibox.WiboxWidget;
      if (clockTooltip.visible && button === 1) {
        clockTooltip.visible = false;
      }
    }
  };

  // TODO: create a declarative react approach for this linking
  const clock = (
    <PanelOutline>
      <PlainClock
        font={font}
        militaryTime={militaryTime}
        onButtonPress={openClockToolTip}
      />
    </PanelOutline>
  );

  // TODO: better styling (like the one before)
  const clockTooltip = (
    <Tooltip
      objects={[clock]}
      mode="outside"
      preferred_positions={['bottom', 'right', 'left', 'top']}
      preferred_alignments={['middle', 'front', 'back']}
      margin_leftright={dpi(8)}
      margin_topbottom={dpi(8)}
      timer_function={() => {
        let day = os.date('%d');
        const oridnal = getOridinal(day);
        const month = os.date('%B');

        const firstDigit = string.sub(day, 0, 1);
        const lastDigit = string.sub(day, -1);

        if (firstDigit === '0') {
          day = lastDigit;
        }

        return `Today is the <b>${day}${oridnal} of ${month}</b>\nAnd it's ${os.date(
          '%A'
        )}`;
      }}
    />
  );

  (screen as any).clockTooltip = clockTooltip;

  const calendar = (
    <Calendar font={font} screen={screen} />
  ) as awful.CalendarPopupWidget;

  calendar.attach(clock, calendarPosition, {
    on_hover: false,
    on_pressed: true,
  });

  return clock;
};
