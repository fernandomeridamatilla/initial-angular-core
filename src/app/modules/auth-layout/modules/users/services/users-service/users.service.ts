import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<unknown[]> {
    const endPoint = 'users';

    return this.http.get<unknown[]>(endPoint);
  }

  getDetail(id: string): Observable<unknown> {
    const endPoint = `users/${id}`;

    return this.http.get<unknown>(endPoint);
  }
}
