
import * as fromTickets from '../../store/actions/ticket.actions';
import { Ticket } from '../models';

export const ticketFeatureKey = 'ticket';

export interface TicketState {
  data: Ticket[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: TicketState = {
  data: [
    {
      id: 0,
      description: 'Install a monitor arm',
      assigneeId: 111,
      completed: false
    },
    {
      id: 1,
      description: 'Move the desk to the new location',
      assigneeId: 111,
      completed: true
    }
  ],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState, 
  action: fromTickets.TicketActions
  ): TicketState {
  const { TicketActionTypes: TATY } = fromTickets;
  switch (action.type) {
    case TATY.LOAD_TICKETS: {
      return {
        ...state,
        loading: true
      };
    }

    case TATY.LOAD_TICKETS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case TATY.LOAD_TICKETS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
  }

  return state;
}

export const getTickets        = ( state: TicketState ) => state.data;
export const getTicketsBy      = ( state: TicketState, props) => {
  const selected = state.data.filter( t => t[props.key] === props.value );
  return selected;
}; 
export const getTicketsLoading = ( state: TicketState ) => state.loading;
export const getTicketsLoaded  = ( state: TicketState ) => state.loaded;
