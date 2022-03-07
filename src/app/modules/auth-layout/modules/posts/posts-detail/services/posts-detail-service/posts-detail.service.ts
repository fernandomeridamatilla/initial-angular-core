import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PostsDetailService {
  constructor(private http: HttpClient) {}

  getDetail(id: string): Observable<unknown> {
    const endPoint = `posts/${id}`;

    return this.http.get<unknown>(endPoint);
  }
}
