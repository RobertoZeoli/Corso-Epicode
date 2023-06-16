import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Utente } from 'src/app/models/utente.interface';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  baseURL = environment.baseURL;

  constructor(private http:HttpClient) { }

  recupera(){
    return this.http.get<Utente[]>(`${this.baseURL}`)
  }
}
