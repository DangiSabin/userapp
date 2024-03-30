import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../shared/userservice.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  newUser:User=new User();
  constructor(private router:Router,private userService:UserserviceService){}

  ngOnInit(){
    console.log('inside AddUserComponent');
  }

  onSubmit(form:NgForm){
    this.newUser.firstName=form.value.firstName;
    this.newUser.lastName=form.value.lastName;
    this.newUser.email=form.value.email;

    console.log('new user in ts:',this.newUser);

    this.userService.addUser(this.newUser).subscribe(
      (response:User)=>{
        console.log('New user added',response);
      },
      (error:any)=>{
        console.error('An error occured while adding user: ',error);
      }
    );
    this.router.navigate(['/user-list']);
  }

  back(){
    this.router.navigate(['/user-list']);
  }

}
