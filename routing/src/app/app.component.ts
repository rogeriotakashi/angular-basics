import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  settingsRoute = 'settings';

  routes = [
    { linkName: 'Home', url:'home'},
    { linkName: 'Settings', url:'settings'} 
  ]
}
