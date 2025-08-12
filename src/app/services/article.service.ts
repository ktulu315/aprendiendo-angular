import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 
import { Observable } from "rxjs";
import { Global } from "./global";

@Injectable({ providedIn: 'root'}) export class ArticleService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    pruebas(){
        return "Servicio de article ejecutadoo";
    }

    getArticles(last: any = null):Observable<any> {
        
        let articles = 'articles';
        
        if(last != null){
            articles = 'articles/5';
        }
        return this._http.get(this.url + articles);
    }

}