import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Campground from 'src/models/Campground';

@Injectable({
  providedIn: 'root',
})
export class CampgroundService {
  apiURL = 'http://localhost:3000/campgrounds';

  constructor(private http: HttpClient) {}

  fetchPage(page: number, page_size: number): Observable<Campground[]> {
    return this.http.get<Campground[]>(
      `${this.apiURL}?page=${page}&page_size=${page_size}`
    );
  }

  fetchById(id: string): Observable<Campground> {
    return this.http.get<Campground>(`${this.apiURL}/${id}`);
  }

  getAmount(): Observable<{ amount: number }> {
    return this.http.get<{ amount: number }>(`${this.apiURL}/amount`);
  }

  create(campground: Campground): Observable<Campground> {
    return this.http.post<Campground>(this.apiURL, { campground });
  }

  update(updates: Object, id: string) {
    return this.http.put(`${this.apiURL}/${id}`, { updates });
  }

  delete(id: string): Observable<Campground> {
    return this.http.delete<Campground>(`${this.apiURL}/${id}`);
  }
}
