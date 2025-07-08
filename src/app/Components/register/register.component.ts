import { Component } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private dataService: DataService) { }

  newUser = { name: '', email: '', password: '' }
  message: string = '';
  addUser() {
    this.dataService.addUser(this.newUser).subscribe({
      next: (result) => {
        this.message = 'The user was added successfully!';
        this.newUser = { name: '', email: '', password: '' };
      },
      error: (error) => {
        this.message = error.message;
      }
    })
  }
}
