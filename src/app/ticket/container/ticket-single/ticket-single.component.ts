import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Ticket } from '../../models';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store'

@Component({
  selector: 'app-ticket-single',
  templateUrl: './ticket-single.component.html',
  styleUrls: ['./ticket-single.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketSingleComponent implements OnInit {
  ticket$: Observable<Ticket>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.ticket$ = this.store.select( fromStore.getTicket );
    //this.store.dispatch( new fromStore.LoadTicket( parseInt(ID, 10) ) );
  }
}