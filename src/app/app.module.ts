import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './reducers/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
