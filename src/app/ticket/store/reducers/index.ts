import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromTickets from './ticket.reducer';

export interface State {
  tickets: fromTickets.TicketState
}

export const reducers: ActionReducerMap<State> = {
  tickets: fromTickets.reducer
};

export const getAppState = createFeatureSelector<State>(fromTickets.ticketFeatureKey);