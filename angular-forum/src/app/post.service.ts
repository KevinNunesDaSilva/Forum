import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Post } from './post';


@Injectable({ providedIn: 'root' })
export class PostService {

  private postsUrl = 'api/posts';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url).pipe(    );
  }
}
