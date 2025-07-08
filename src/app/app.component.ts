import { Component } from '@angular/core';
import { UsersComponent } from './Components/users/users.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';

@Component({
  selector: 'app-root',
  imports: [UsersComponent, RegisterComponent, LoginComponent],
   standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '11-api-demo';
}
