import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private url='';
  private baseurl=`http://localhost:8082/api`;

  constructor(private http:HttpClient) { }

  //get all students
  getAll():Observable<User[]>  {
    console.log('inside service: getAll()');
    console.log('url: ',this.baseurl);
    this.url=`${this.baseurl}/all`;
    return this.http.get<User[]>(this.url);
  }

  deleteUser(id:number):Observable<void>{
    this.url=`${this.baseurl}/delete/${id}`;
    console.log('delete user service url: ',this.url);
    return this.http.delete<void>(this.url);
  }

  addUser(newUser:User):Observable<User>{
    console.log('new user: ',newUser);
    this.url=`${this.baseurl}/add`;
    console.log('add url: ',this.url);
    console.log('url:', '${this.baseurl}/add');
    return this.http.post<User>(this.url,newUser);
  }

 
  updateUser(updateUser:User):Observable<User>{
    this.url=`${this.baseurl}/update`;
    console.log('update url: ',this.url);
    return this.http.put<User>(this.url,updateUser);
  }

}
