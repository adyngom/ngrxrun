import { Action } from '@ngrx/store';

import { Ticket } from '../../models';

export enum TicketActionTypes {
  LOAD_TICKETS = '[Ticket] Load Tickets',
  LOAD_TICKETS_FAIL = '[Ticket] Load Tickets Fail',
  LOAD_TICKETS_SUCCESS = '[Ticket] Load Tickets Success',
  LOAD_TICKET = '[Ticket] Load Ticket',
  LOAD_TICKET_FAIL = '[Ticket] Load Ticket Fail',
  LOAD_TICKET_SUCCESS = '[Ticket] Load Ticket Success',
  SHOW_ALL_TICKETS = '',
  SHOW_DONE_TICKETS = '',
  SHOW_PENDING_TICKETS = '',
  ADD_NEW_TICKET = '[Ticket] Add New Ticket',
  ADD_TICKET_SUCCESS = '[Ticket] Add Ticket Success',
  ADD_TICKET_FAIL = '[Ticket] Add Ticket Fail'
}

export class LoadTickets implements Action {
  readonly type = TicketActionTypes.LOAD_TICKETS;
}

export class LoadTicketsFail implements Action {
  readonly type = TicketActionTypes.LOAD_TICKETS_FAIL;
  constructor(public error: any = 'Failed to load tickets') {}
}

export class LoadTicketsSuccess implements Action {
  readonly type = TicketActionTypes.LOAD_TICKETS_SUCCESS;
  constructor(public payload: Ticket[]) {}
}

export class LoadTicket implements Action {
  readonly type = TicketActionTypes.LOAD_TICKET;
  constructor(public payload: number) {}
}

export class LoadTicketFail implements Action {
  readonly type = TicketActionTypes.LOAD_TICKET_FAIL;
  constructor(public error: any = 'Failed to load ticket') {}
}

export class LoadTicketSuccess implements Action {
  readonly type = TicketActionTypes.LOAD_TICKET_SUCCESS;
  constructor(public payload: Ticket ) {}
}

export class ShowAllTickets implements Action {
  readonly type = TicketActionTypes.SHOW_ALL_TICKETS;
  constructor( public payload: Ticket[] ) {}
}

export class ShowDonetickets implements Action {
  readonly type = TicketActionTypes.SHOW_DONE_TICKETS;
  constructor( public payload: Ticket[] ) {}
}

export class ShowPendingTickets implements Action {
  readonly type = TicketActionTypes.SHOW_PENDING_TICKETS;
  constructor( public payload: Ticket[] ) {}
}

export class AddNewTicket implements Action {
  readonly type = TicketActionTypes.ADD_NEW_TICKET;
  constructor( public payload: Ticket ) {}
}

export class AddTicketSuccess implements Action {
  readonly type = TicketActionTypes.ADD_TICKET_SUCCESS;
  constructor( public payload: Ticket ) {}
}

export class AddTicketFail implements Action {
  readonly type = TicketActionTypes.ADD_TICKET_FAIL;
  constructor ( public payload: any = 'Failed to add a new ticket') {}
}


export type TicketActions = LoadTickets | 
                            LoadTicketsFail | 
                            LoadTicketsSuccess |
                            LoadTicket | 
                            LoadTicketFail | 
                            LoadTicketSuccess |
                            ShowAllTickets |
                            ShowDonetickets |
                            ShowPendingTickets | 
                            AddNewTicket |
                            AddTicketSuccess |
                            AddTicketFail;
