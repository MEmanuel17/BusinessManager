import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from './user.model';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

interface LoginResponseData{
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean,
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  //stocarea utilizatorului
  user = new Subject<User>();

  constructor(private http: HttpClient) {}

  //Pentru sectiunea de signin(creare cont)
  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCMlm80yPBLz-vtTORnbd7l4WzsAAwSh6k ',
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(errorRes => {
          let errorMessage = 'An unknown error occurred!';
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email exists already';
          }
          switch (errorRes.error.error.message) {
            case 'USER_DISABLED':
              errorMessage = 'The user account has been disabled by an administrator.';
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_NOT_FOUND':
              errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.';
          }
          return throwError(errorMessage);
        }),
        tap(resData => {
          const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
          const user = new User(
            resData.email,
            resData.localId,
            resData.idToken,
            expirationDate
          );
      })
    );
  }

  //Pentru sectiunea de logare
  login(email:string, password: string) {
    return this.http
    .post<LoginResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCMlm80yPBLz-vtTORnbd7l4WzsAAwSh6k',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(errorRes => {
        let errorMessage = 'An unknow error occured!';
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
          case 'EMAIL_NOT_FOUND':
            errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted or not created.';
        }
        switch (errorRes.error.error.message) {
          case 'INVALID_PASSWORD':
            errorMessage = 'The password is invalid or the user does not have a password.';
        }
        switch (errorRes.error.error.message) {
          case 'USER_DISABLED':
            errorMessage = 'The user account has been disabled by an administrator.';
        }
        return throwError(errorMessage);
      }),
      tap(resData => {
        const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
        const user = new User(
          resData.email,
          resData.localId,
          resData.idToken,
          expirationDate
        );
    })
    );
  }
}
