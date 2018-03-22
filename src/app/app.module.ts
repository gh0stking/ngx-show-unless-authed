import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowUnlessAuthed } from './show-unless-authed.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowUnlessAuthed,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
