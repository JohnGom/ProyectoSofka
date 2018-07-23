import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, 
  MatInputModule, 
  MatButtonModule, 
  MatSelectModule, 
  MatTableModule,
  MatIconModule,
  MatDialogModule,
  MatListModule,
  MatToolbarModule,
  MatPaginatorModule } from '@angular/material';

import { AddNewMemberComponent } from './add-new-member/add-new-member.component';
import { ShowAllMembersComponent } from './show-all-members/show-all-members.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule, 
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatToolbarModule,
    MatPaginatorModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [ AddNewMemberComponent, ShowAllMembersComponent, HeaderComponent ],
  exports: [ AddNewMemberComponent, ShowAllMembersComponent, HeaderComponent ]
})
export class MembersManagerModule { }
