import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { environment } from 'src/app/environments/environment';

interface User {
  username: string;
  password: string;
  token: string;
}

interface LoginContextInterface {
  username: string;
  password: string;
}

const defaultUser = {
  username: 'Mathis',
  password: '12345',
  token: '12345'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // @ts-ignore
  token: string;

  constructor(private httpService: HttpClient) {}

  login(loginContext: LoginContextInterface): Observable<User> {
    return this.httpService.post<User>(environment.apiUrl + '/auth/login', loginContext)
  }

  getUser() {
    return this.httpService.get<User>(environment.apiUrl + '/users/me')
  }

  logout(): Observable<boolean> {
    return of(false);
  }
}
