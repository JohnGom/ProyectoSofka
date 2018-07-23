import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { LoginComponent } from 'src/app/components/auth/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ LoginComponent ],
  exports: [ LoginComponent ]
})
export class AuthModule { }
