import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromTickets from './ticket.reducer';

import { environment } from '../../../../environments/environment';



export interface State {
  tickets: fromTickets.TicketState
}

export const reducers: ActionReducerMap<State> = {
  tickets: fromTickets.reducer
};

export const getAppState = createFeatureSelector<State>(fromTickets.ticketFeatureKey);

export const getTicketState = createSelector(
  getAppState,
  ( state : State) => state.tickets
);

export const getAllTickets     = createSelector( getTicketState, fromTickets.getTickets);
export const getTicketBy       = () => createSelector( getTicketState, fromTickets.getTicketBy);
export const getTicketsBy      = () => createSelector( getTicketState, fromTickets.getTicketsBy);
export const getTicketsLoaded  = createSelector( getTicketState, fromTickets.getTicketsLoaded);
export const getTicketsLoading = createSelector( getTicketState, fromTickets.getTicketsLoading);