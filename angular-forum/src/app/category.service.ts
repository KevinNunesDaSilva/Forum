import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Category } from './category';


@Injectable({ providedIn: 'root' })
export class CategoryService {

  private categoriesUrl = 'api/categories';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
  }

  getCategory(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url).pipe();
  }
}
