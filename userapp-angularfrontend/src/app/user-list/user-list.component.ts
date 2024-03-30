import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NavigationEnd, Router } from '@angular/router';
import { UserserviceService } from '../shared/userservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[]=[];

  constructor(private router:Router, private userService:UserserviceService){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.url === '/list-user') {
        // When navigating to list-user component, refresh user list
        this.getAllUsers();
      }
    });
  }
  
  ngOnInit() {
    console.log('inside user-list');
    /*this.users=[
      {userid:1,'firstName':'Ram','lastName':'Thapa',email:'ram.thapa@gmail.com'},
      {userid:2,'firstName':'Shyam','lastName':'KC',email:'shyam.kc@gmail.com'}
    ];*/
    this.getAllUsers();
  }

  viewUser(viewUser:User){
    console.log('view user: ',viewUser);
    this.router.navigate(['/view-user'],
    { queryParams: { viewUser: JSON.stringify(viewUser) }});
  }

  updateUser(selectedUser:User){
    console.log('update user: ',selectedUser);
    this.router.navigate(['/update-user'], 
    { queryParams: { selectedUser: JSON.stringify(selectedUser) }});
  }

  deleteUser(user:User):void{
    console.log('delete user: ',user);
    let id=Number(user.id);
    this.userService.deleteUser(id).subscribe(
      ()=>{
        console.log('user record delete successfully');
        this.getAllUsers();
      },
      (error:any)=>{
        console.error('An error occured while deleting user record:',error);
      }
      );
      this.router.navigate(['/user-list']);

  }

  addUser(){
    console.log('add user');
    this.router.navigate(['/add-user']);
  }

  getAllUsers():void{
    console.log('inside getAllUsers');
    this.userService.getAll().subscribe(
      users=>{
        console.log('API response:', users);
        this.users=users;
      },
    error=>{
      console.error(error);
    }
    );
  }

}
