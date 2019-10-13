import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Ticket } from '../../models';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketListComponent implements OnInit {

  @Input()
  tickets: Ticket[];

  @Output()
  filterBy = new EventEmitter<String>();

  @Output()
  create = new EventEmitter<any>();

  query: string = 'all';

  form = this.fb.group({
    description: [ '', Validators.required ],
    assigneeId: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }

  showTickets(event: any) {
    const match = event.target.dataset.action;
    if(!!match) {
      this.query = match;
      this.filterBy.emit(match);
    }
  }

  createTicket(form: FormGroup) {
    const { value, valid } = form;
    if(valid) {
      this.create.emit(value);
    }
  }

}