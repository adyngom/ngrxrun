import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, switchMap, map, mergeMap, catchError } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';
import * as fromTickets from '../actions/ticket.actions';
import { BackendService } from '../../../app/backend.service';



@Injectable()
export class TicketEffects {
  constructor(
    private actions$: Actions<fromTickets.TicketActions>, 
    private backendService: BackendService
  ) {}

  // Load all tickets
  @Effect()
  loadTickets$: Observable<any> = this.actions$.pipe(
    ofType(fromTickets.TicketActionTypes.LOAD_TICKETS),
    mergeMap( action => 
      this.backendService.tickets().pipe(
        map( tickets => new fromTickets.LoadTicketsSuccess(tickets)),
        catchError((err) => of( new fromTickets.LoadTicketsFail(err)))
      )  
    )
  );

  // Add new ticket
  @Effect()  
  addNewTicket$: Observable<any> = this.actions$.pipe(
    ofType(fromTickets.TicketActionTypes.ADD_NEW_TICKET),
    mergeMap( action =>
      this.backendService.newTicket(action['payload']).pipe(
        map( ticket => new fromTickets.AddTicketSuccess(ticket)),
        catchError((err) => of( new fromTickets.AddTicketFail(err)))
      )
    )
  )

}
