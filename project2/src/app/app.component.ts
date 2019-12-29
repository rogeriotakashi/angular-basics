import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  inputText: string = "Initial Value";
 
  constructor() {
    this.user = new User();
    this.user.name = "Rogerio Takashi",
    this.user.designation = "Software Developer",
    this.user.address = "Rua Jorge Niedo",
    this.user.phone = [
      "111111111111",
      "222222222222"
    ];

  }
}
