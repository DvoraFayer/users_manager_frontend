import { Component } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private dataService: DataService) { }

  message: string = '';
  userName: string = '';
  password: string = '';

  login() {
    this.dataService.login(this.userName, this.password).subscribe({
      next: (result) => {
        this.message = 'login successfully!';
      },
        error: () => {

        }
      
    });
  }
}
