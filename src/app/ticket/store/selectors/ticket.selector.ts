import { createSelector } from "@ngrx/store";

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromTickets from '../reducers/ticket.reducer';

import { Ticket } from '../../models';

export const getTicketState = createSelector(
    fromFeature.getAppState,
    ( state : fromFeature.State) => state.tickets
  );
export const getAllTickets     = createSelector( getTicketState, fromTickets.getTickets);
export const getTicketBy       = () => createSelector( getTicketState, fromTickets.getTicketBy);
export const getTicket         = createSelector( 
    getAllTickets, 
    fromRoot.getRouterState,
    (items, router): Ticket => {
        const ticket = items.find( item => item.id === parseInt( router.state.params.ticketId, 10 ) );
        return router.state && ticket;
    }
);
export const getTicketsBy      = () => createSelector( getTicketState, fromTickets.getTicketsBy);
export const getTicketsLoaded  = createSelector( getTicketState, fromTickets.getTicketsLoaded);
export const getTicketsLoading = createSelector( getTicketState, fromTickets.getTicketsLoading);