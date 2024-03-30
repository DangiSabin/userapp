import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  viewUser: User=new User();
  constructor(private router:Router, private route:ActivatedRoute){
  
     //Retrieve the viewUser from the query parameters
     const viewUser = this.route.snapshot.queryParamMap.get('viewUser');
     console.log('viewUser:', viewUser);
     if (viewUser) {
       this.viewUser = JSON.parse(viewUser);
     }
  }

  ngOnInit(){
    console.log('inside ViewUserComponent');
  }
  
  back(){
    this.router.navigate(['/user-list']);
  }

}
