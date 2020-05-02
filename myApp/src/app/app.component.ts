import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myApp';

  public servers = ['testserver 1', 'testserver 2'];

  public addServer() {
    this.servers.push('new server');
  }
}
