import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminHomeService {
    private urlApi: string = "http://127.0.0.1:8000/api/";
    public method: string = 'store';

    constructor(private http: HttpClient) {
    }

    getList(module: string): Observable<any[]> {
        return this.http.get<any[]>(this.urlApi + module);
    }

    findId(module: string, itemId: number): Observable<any> {
        return this.http.get<any>(this.urlApi + module + itemId);
    }

    // @ts-ignore
    storeOrUpdate(module: string, data: any, itemId: number = null): Observable<any> | undefined {
        let temp
        console.log(this.method)
        if (this.method === "store") {
            temp = this.store(module, data)
        } else if (this.method === "update") {
            temp = this.update(module, itemId, data)
        }
        return temp
    }

    store(module: string, data: any): Observable<any> {
        return this.http.post<any>(this.urlApi + module, data);
    }

    update(module: string, itemId: number, data: any): Observable<any> {
        return this.http.put<any>(this.urlApi + module + itemId, data);
    }

    deleteItem(module: string, itemId: number): Observable<any> {
        return this.http.delete(this.urlApi + module + itemId);
    }
}
