import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from '../../../backend.service';
import { Ticket } from '../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ticket-single',
  templateUrl: './ticket-single.component.html',
  styleUrls: ['./ticket-single.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketSingleComponent implements OnInit {
  ticket$: Observable<Ticket>;

  constructor(
    private backendService: BackendService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const ID = this.route.snapshot.params.id || null;
    if(!!ID) {
       this.ticket$ = this.backendService.ticket( parseInt(ID, 10) );
    }
  }
}