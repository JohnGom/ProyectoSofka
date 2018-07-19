import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewMemberComponent } from './member-manager/add-new-member/add-new-member.component';
import { ShowAllMembersComponent } from './member-manager/show-all-members/show-all-members.component';

const routes: Routes = [
  { path: '', redirectTo: '/addMember', pathMatch: 'full' },
  { path: 'addMember', component: AddNewMemberComponent },
  { path: 'showMembers', component: ShowAllMembersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
