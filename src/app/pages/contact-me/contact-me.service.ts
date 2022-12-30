import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
// import { environment } from '';

@Injectable()
export class ContactMeService {
    // API_URL = "environment.apiBase";
    API_URL = environment.apiBase;

    constructor(private _http: HttpClient) { }

    sendEmail(dataSendBody: any): Observable<any> {
        const body = {
            name: dataSendBody.name,
            emailAddress: dataSendBody.email,
            message: dataSendBody.message,
            subject: dataSendBody.subject,
        }
        
        return this._http.post<any>(`${this.API_URL}/email`, body);
    }
}