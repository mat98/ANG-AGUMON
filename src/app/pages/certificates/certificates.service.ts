import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CertificateService {
    API_URL = environment.apiBase;

    constructor(private _http: HttpClient) {}

    getCertificates(pageNumber: number, pageSize: number): Observable<any> {
        const body = {
            pageNumber,
            pageSize
        }
        return this._http.get<any>("assets/mocks/fake_data.json");
        // return this._http.post<any>(`${this.API_URL}/certificates`, body);
    }
    
}