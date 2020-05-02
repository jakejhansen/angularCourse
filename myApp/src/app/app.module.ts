import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

import { FormsModule } from '@angular/forms';
import { Assignment3Component } from './exercises/section2/assignment3/assignment3.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, Assignment3Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
