import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { SessionService } from '../session-service/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  apiUrl = 'https://63c475128067b6bef6d973dc.mockapi.io/';


  constructor(
    private readonly httpClient: HttpClient,
    private readonly sessionService: SessionService
  ) {}

  /* login(data: { email: string; password: string }): Observable<User> {
    return this.httpClient
      .post<LoginSuccessful>(`${this.apiUrl}/users`, data)
      .pipe(
        tap((data) => localStorage.setItem('token', data.token)),
        mergeMap(() => this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/7`)
        ),
        map(({ data }) => new User(
              data.id,
              data.email,
              data.password,
              data.userName,
              data.address,
              data.phoneNumber,
              data.role,
              
            )
        ),
        tap((user) => this.sessionService.setUser(user))
      );
  } */
}
