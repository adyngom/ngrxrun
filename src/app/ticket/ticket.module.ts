import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers'

import { BackendService } from '../backend.service';
import { TicketComponent } from './container/ticket.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketSingleComponent } from './container/ticket-single/ticket-single.component';
import { EffectsModule } from '@ngrx/effects';
import * as fromTicket from './reducers/ticket.reducer';
import { TicketEffects } from '../store/effects/ticket.effects';

// Routes
export const ROUTES: Routes = [
  {
    path: '',
    component: TicketComponent
  },
  {
    path: ':id',
    component: TicketSingleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature(fromTicket.ticketFeatureKey, reducers ),
    EffectsModule.forFeature([TicketEffects])
  ],
  providers: [ BackendService ],
  declarations: [TicketComponent, TicketListComponent, TicketSingleComponent]
})
export class TicketModule { }