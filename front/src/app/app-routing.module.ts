import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {AuthenticationGuard} from "./shared/guard/authentication.guard";
import {AuthenticationComponent} from "./authentication/authentication.component";

const routes: Routes = [
    { path: 'authentication', component: AuthenticationComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'contact-list', component: ContactListComponent, canActivate: [AuthenticationGuard] },
    { path: '**', redirectTo: '/authentication/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
