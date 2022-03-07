import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PostsListService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<unknown[]> {
    const endPoint = 'posts';

    return this.http.get<unknown[]>(endPoint);
  }
}
