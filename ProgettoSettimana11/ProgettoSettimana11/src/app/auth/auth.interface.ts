export interface Auth {
  accessToken:string,
  user:[
    id:number,
    email:string,
    name:string,
    cognome: string,
  ]
}
