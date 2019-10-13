
import * as fromTickets from '../actions/ticket.actions';
import { Ticket } from '../../models';

export const ticketFeatureKey = 'ticket';

export interface TicketState {
  data: Ticket[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: TicketState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState, 
  action: fromTickets.TicketActions
  ): TicketState {
  const { TicketActionTypes: TATY } = fromTickets;
  switch (action.type) {
    case TATY.LOAD_TICKET: 
    case TATY.LOAD_TICKETS: {
      return {
        ...state,
        loading: true
      };
    }

    case TATY.LOAD_TICKET_FAIL: 
    case TATY.LOAD_TICKETS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }

    case TATY.LOAD_TICKET_SUCCESS: {
      const data: Ticket = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: [ data ]
      };
    }

    case TATY.LOAD_TICKETS_SUCCESS: {
      const data: Ticket[] = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    

    case TATY.ADD_TICKET_SUCCESS: {
      const ticket:Ticket = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: [...state.data, ticket]
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
export const getTicketBy      = ( state: TicketState, props) => {
  const selected = state.data.find( t => t[props.key] === props.value );
  console.log(props, selected);
  return selected;
};
export const getTicketsLoading = ( state: TicketState ) => state.loading;
export const getTicketsLoaded  = ( state: TicketState ) => state.loaded;
