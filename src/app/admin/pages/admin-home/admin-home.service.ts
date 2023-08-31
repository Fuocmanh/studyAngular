import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminHomeService {
    constructor(private http: HttpClient) {
    }

    getList(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000/orders');
    }

    findId(itemId: number): Observable<any> {
        return this.http.get<any>(`http://localhost:3000/orders/${itemId}`);
    }

    update(itemId: number, updatedData: any): Observable<any> {
        return this.http.put<any>(`http://localhost:3000/orders/${itemId}`, updatedData);
    }

    searchHeroes(term: string): Observable<any> {
        term = term.trim();

        const heroesURL = `http://localhost:3000/orders/${term}`;
        return this.http.jsonp(heroesURL, 'callback').pipe();
    }

    deleteItem(itemId: number): Observable<any> {
        return this.http.delete(`http://localhost:3000/orders/${itemId}`);
    }
}
