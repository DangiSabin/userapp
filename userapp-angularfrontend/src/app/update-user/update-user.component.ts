import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../shared/userservice.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  selectedUser: User=new User();
  constructor(private router:Router, private userService:UserserviceService,private route:ActivatedRoute){
  
     //Retrieve the selectedUser from the query parameters
     const updateUser = this.route.snapshot.queryParamMap.get('selectedUser');
     console.log('selectedUser:', updateUser);
     if (updateUser) {
       this.selectedUser = JSON.parse(updateUser);
     }
  }
  
  ngOnInit(){
    console.log('inside UpdateUserComponent');
  }
  
  back(){
    this.router.navigate(['/user-list']);
  }

  updateuser():void{
    this.userService.updateUser(this.selectedUser).subscribe(
      (response:User)=>{
        console.log('updated user',response);
      },
      (error: any) => {
        console.error('An error occurred while adding a user:', error);
      }
    );
    this.router.navigate(['/user-list']);
  }

}
