import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  { path:"user-list", component:UserListComponent},
  { path:"", redirectTo: '/user-list', pathMatch: 'full'},
  { path:"add-user", component:AddUserComponent},
  { path:"update-user", component:UpdateUserComponent},
  { path:"view-user", component:ViewUserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
    UpdateUserComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
