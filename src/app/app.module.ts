import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { simpleReducer } from './simple.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { postReducer } from './reducers/post.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      post: postReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
