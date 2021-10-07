import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {AppComponent} from "./app.component";
import {UserListComponent} from "./user-list/user-list.component";

const routes: Routes = [
  {path:'add',component:FormComponent},
  {path:'',component:UserListComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
