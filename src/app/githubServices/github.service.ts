import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubService {
    private username : string;

    private client_id = '1dd4a7d338e0169f0a49';
    private client_secret = 'e1843b0a61111ce5459ec710a635b2cd3612cf85';
    
    constructor(private _http:Http){
        console.log("Start Service github");
        this.username = 'devrap2017';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username).map(res=>res.json());
          // return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret'+this.client_secret).map(res=>res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos').map(res=>res.json());
       //  return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret'+this.client_secret).map(res=>res.json());
    }

  

    updateUser(username:string){
        this.username = username;
    }
}