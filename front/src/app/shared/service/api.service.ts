import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    private static getAuthorizationHeader(token: string) {
        return new HttpHeaders(token ? {Authorization: 'Bearer ' + token} : {});
    }

    public post(route: string, params, token: string = null) {
        const url = this.baseUrl + route;
        return this.http.post(url, params, {
            headers: ApiService.getAuthorizationHeader(token)
        });
    }

    public put(route: string, params, token: string) {
        const url = this.baseUrl + route;
        return this.http.put(url, params, {
            headers: ApiService.getAuthorizationHeader(token)
        });
    }

    /**
     * @param {string} route
     * @param {string} token
     * @returns {Observable<Object>}
     */
    public get(route: string, token: string = null) {
        const url = this.baseUrl + route;
        return this.http.get(url, {
            headers: ApiService.getAuthorizationHeader(token)
        });
    }

    /**
     * @param {string} route
     * @param {string} token
     * @returns {Observable<Object>}
     */
    public delete(route: string, token: string) {
        const url = this.baseUrl + route;
        return this.http.delete(url, {
            headers: ApiService.getAuthorizationHeader(token)
        });
    }
}
