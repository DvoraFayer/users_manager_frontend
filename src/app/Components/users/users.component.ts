import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  items: any[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.dataService.getItems().subscribe({
      next: (data) => {
        this.items = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'שגיאה בשליפת נתונים';
        this.isLoading = false;
      }
    });
  }

  // login(){
  //   this.dataService.login();
  // }
}

