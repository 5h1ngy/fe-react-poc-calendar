import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import { RootState } from '../index';

export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  date: string; // ISO string format
  duration: number; // in minutes
  color?: string;
}

interface CalendarState {
  events: CalendarEvent[];
  currentDate: string; // ISO string format
  currentView: 'day' | 'week' | 'month';
  timeScale: 10 | 30 | 60; // minutes
}

const initialState: CalendarState = {
  events: [],
  currentDate: moment().format(), // current date in ISO format
  currentView: 'week',
  timeScale: 30,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Omit<CalendarEvent, 'id'>>) => {
      const newEvent = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.events.push(newEvent);
    },
    updateEvent: (state, action: PayloadAction<CalendarEvent>) => {
      const index = state.events.findIndex((event) => event.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter((event) => event.id !== action.payload);
    },
    setCurrentDate: (state, action: PayloadAction<string>) => {
      state.currentDate = action.payload;
    },
    setCurrentView: (state, action: PayloadAction<'day' | 'week' | 'month'>) => {
      state.currentView = action.payload;
    },
    setTimeScale: (state, action: PayloadAction<10 | 30 | 60>) => {
      state.timeScale = action.payload;
    },
    importEvents: (state, action: PayloadAction<CalendarEvent[]>) => {
      state.events = action.payload;
    },
    clearEvents: (state) => {
      state.events = [];
    },
  },
});

export const {
  addEvent,
  updateEvent,
  deleteEvent,
  setCurrentDate,
  setCurrentView,
  setTimeScale,
  importEvents,
  clearEvents,
} = calendarSlice.actions;

// Selectors
export const selectEvents = (state: RootState) => state.calendar.events;
export const selectCurrentDate = (state: RootState) => state.calendar.currentDate;
export const selectCurrentView = (state: RootState) => state.calendar.currentView;
export const selectTimeScale = (state: RootState) => state.calendar.timeScale;

export default calendarSlice.reducer;
