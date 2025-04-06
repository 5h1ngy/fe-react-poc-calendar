import moment from 'moment';

// Configurazione locale per l'italiano
export const configureLocale = (): void => {
  moment.locale('it', {
    months: 'Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre'.split('_'),
    monthsShort: 'Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic'.split('_'),
    weekdays: 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
    weekdaysShort: 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm',
    },
    calendar: {
      sameDay: '[Oggi alle] LT',
      nextDay: '[Domani alle] LT',
      nextWeek: 'dddd [alle] LT',
      lastDay: '[Ieri alle] LT',
      lastWeek: '[Lo scorso] dddd [alle] LT',
      sameElse: 'L',
    },
    relativeTime: {
      future: 'tra %s',
      past: '%s fa',
      s: 'alcuni secondi',
      m: 'un minuto',
      mm: '%d minuti',
      h: 'un\'ora',
      hh: '%d ore',
      d: 'un giorno',
      dd: '%d giorni',
      M: 'un mese',
      MM: '%d mesi',
      y: 'un anno',
      yy: '%d anni',
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: (n: number) => `${n}º`,
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
  });
};

// Funzioni di utilità per la generazione delle viste del calendario
export const generateDaysOfMonth = (date: moment.Moment) => {
  const startOfMonth = date.clone().startOf('month');
  const daysInMonth = date.daysInMonth();
  const startDay = startOfMonth.day() === 0 ? 6 : startOfMonth.day() - 1; // Adjust for Monday as first day
  
  const days = [];
  
  // Giorni del mese precedente per riempire la prima settimana
  const prevMonth = startOfMonth.clone().subtract(1, 'month');
  const daysInPrevMonth = prevMonth.daysInMonth();
  
  for (let i = startDay - 1; i >= 0; i--) {
    days.push({
      date: prevMonth.clone().date(daysInPrevMonth - i),
      isCurrentMonth: false,
      isToday: false,
    });
  }
  
  // Giorni del mese corrente
  const today = moment();
  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = startOfMonth.clone().date(i);
    days.push({
      date: currentDate,
      isCurrentMonth: true,
      isToday: currentDate.format('YYYY-MM-DD') === today.format('YYYY-MM-DD'),
    });
  }
  
  // Giorni del mese successivo per riempire fino alla fine della griglia (6 righe x 7 colonne = 42 giorni)
  const nextMonth = startOfMonth.clone().add(1, 'month');
  let remaining = 42 - days.length;
  
  for (let i = 1; i <= remaining; i++) {
    days.push({
      date: nextMonth.clone().date(i),
      isCurrentMonth: false,
      isToday: false,
    });
  }
  
  return days;
};

export const generateWeekDays = (date: moment.Moment) => {
  const startOfWeek = date.clone().startOf('week');
  const days = [];
  
  for (let i = 0; i < 7; i++) {
    const currentDate = startOfWeek.clone().add(i, 'days');
    days.push({
      date: currentDate,
      isToday: currentDate.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD'),
    });
  }
  
  return days;
};

export const generateTimeSlots = (scale: 10 | 30 | 60) => {
  const slots = [];
  
  for (let hour = 0; hour < 24; hour++) {
    if (scale === 60) {
      slots.push(moment().hour(hour).minute(0).format('HH:mm'));
    } else if (scale === 30) {
      slots.push(moment().hour(hour).minute(0).format('HH:mm'));
      slots.push(moment().hour(hour).minute(30).format('HH:mm'));
    } else if (scale === 10) {
      for (let minute = 0; minute < 60; minute += 10) {
        slots.push(moment().hour(hour).minute(minute).format('HH:mm'));
      }
    }
  }
  
  return slots;
};

export const roundToNearestInterval = (time: moment.Moment, interval: number) => {
  const minutes = time.minutes();
  const roundedMinutes = Math.round(minutes / interval) * interval;
  return time.clone().minutes(roundedMinutes).seconds(0);
};

export const calculateEventPosition = (event: any, timeScale: number) => {
  const eventStart = moment(event.date);
  const startMinutes = eventStart.hours() * 60 + eventStart.minutes();
  const eventDuration = event.duration || 30;
  const totalMinutesInDay = 24 * 60;
  
  return {
    top: `${(startMinutes / totalMinutesInDay) * 100}%`,
    height: `${(eventDuration / totalMinutesInDay) * 100}%`,
  };
};
