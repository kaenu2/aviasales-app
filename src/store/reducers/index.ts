import { combineReducers } from '@reduxjs/toolkit';

import { sortReducer } from './sortReducer';
import { transfersReducer } from './transfersReducer';
import { ticketsReducer } from './ticketsReducer';

export const rootReducer = combineReducers({
  sortReducer,
  transfersReducer,
  ticketsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
