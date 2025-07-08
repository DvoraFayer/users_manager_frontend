import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://docker-tring-3.onrender.com/api/users'; // כתובת ה-API של השרת

  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(this.apiUrl , { headers }).pipe(
      catchError(error =>{
        return of([]);
      })
    );
  }

  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }


  login(userName: string, password: string): Observable<any>{
    return this.http.post<any>('https://docker-tring-3.onrender.com/api/Auth/login', {userName: userName, password: password}).pipe(
      tap(res => {
        console.log(res.token)
        if(res && res.token){
          localStorage.setItem('authToken', res.token)
        }
      })
    )
  }





}



