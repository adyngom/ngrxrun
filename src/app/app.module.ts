import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment'


// ngrx
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EffectsModule } from '@ngrx/effects';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tickets' },
  { 
    path: 'tickets',
    //loadChildren: () => import('./ticket/ticket.module').then( m => m.TicketModule),
    loadChildren: './ticket/ticket.module#TicketModule'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot( {}, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument(): [],
    EffectsModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
