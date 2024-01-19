import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import esLocale from '@fullcalendar/core/locales/es';
import { IEventCalendar } from '../types/EventCalendar';

type TProps = {
  events: IEventCalendar[]
  handleDateClick?: (args: any) => void
  handleEventClick?: (args: any) => void
  height?: number
}

const Calendar = ({ events, handleDateClick = () => undefined, handleEventClick = () => undefined, height = 500 }: TProps) => {

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      events={events}
      locale={esLocale}
      height={height}
      eventClassNames={['class_event']}
      eventClick={handleEventClick}
      dateClick={handleDateClick}
      initialView="dayGridMonth"
      validRange={{ end: new Date() }}
    />
  )
};
export default Calendar;
