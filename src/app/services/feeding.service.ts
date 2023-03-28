import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class FeedingService {

  private feedingUrl: string;

  constructor(private http: HttpClient) {
    this.feedingUrl = 'http://localhost:3000/api/v1/feeding';
  }

  getAllFeedings(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.feedingUrl);
  }

  createFeeding(feedingData: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.feedingUrl, feedingData);
  }
}
