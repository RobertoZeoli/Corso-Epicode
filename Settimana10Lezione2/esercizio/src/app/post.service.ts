import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  async getPosts(){
    return (await fetch('assets/db.json')).json();
  }
}
