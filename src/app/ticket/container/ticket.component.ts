import { Component, OnInit } from '@angular/core';
//import { BackendService } from '../../backend.service';
import { Observable, from } from 'rxjs';
import { Ticket, User } from '../models';

import * as fromStore from '../../store'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets$: Observable<Ticket[]>;
  //users: Observable<User[]> = this.backendService.users();

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.tickets$ = this.store.select(fromStore.getAllTickets);
    this.store.dispatch( new fromStore.LoadTickets())
  }

  onFilter(select: string) {
    if(select !== 'all') {
      const complete = ( select === "done") ? true : false;
      this.tickets$ = this.store.select(fromStore.getTicketsBy(), {key: 'completed', value: complete });
    }
    else {
      this.tickets$ = this.store.select(fromStore.getAllTickets);
    }
  }

  onCreate(data: Ticket) {
    this.store.dispatch( new fromStore.AddNewTicket( data ));
  }

}