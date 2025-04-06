import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }
  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }
  }

  getWishs() {
    let options = this.getStandardOptions();
    return this.http.get<WishItem[]>('/weatherforecast', options).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if(error.status == 0){
      console.error('A network error occurred:', error.error);
    }
    return throwError(() => {
      new Error('Something bad happened; please try again later.')
    });
  }
}
