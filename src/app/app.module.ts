import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment'


// ngrx
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EffectsModule } from '@ngrx/effects';

import { reducers, CustomSerializer } from './store';

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
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot( reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument(): [],
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule
  ],
  declarations: [AppComponent],
  providers: [{ provide: RouterStateSerializer,  useClass: CustomSerializer }],
  bootstrap: [AppComponent],
})
export class AppModule {

}
