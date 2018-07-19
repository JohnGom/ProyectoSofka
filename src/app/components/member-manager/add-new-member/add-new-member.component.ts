import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MembersManagerService } from '../../../services/members-manager/members-manager.service';
import { Member, Skill } from '../../../model/Member';




@Component({
  selector: 'app-add-new-member',
  templateUrl: './add-new-member.component.html',
  styleUrls: ['./add-new-member.component.css']
})
export class AddNewMemberComponent implements OnInit {

  PersonForm: FormGroup;
  person: Member;
  skills: Array<Skill> = [];

  constructor(private memberService: MembersManagerService,
              private router: Router) {
   }

  ngOnInit() {
    this.getMembers();
    this.PersonForm = new FormGroup ({
      'identification': new FormControl('', [Validators.required]),
      'name': new FormControl('', [Validators.required]),
      'lastname': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'skill': new FormControl(''),
      'level': new FormControl(''),
    });
  }

  getMembers() {
    this.memberService.getMembers().subscribe(result => {
      console.log(result);
    })
  }

  get identification() { return this.PersonForm.get('identification'); }
  get name() { return this.PersonForm.get('name'); }
  get lastname() { return this.PersonForm.get('lastname'); }
  get email() { return this.PersonForm.get('email'); }
  get skill() { return this.PersonForm.get('skill'); }
  get level() { return this.PersonForm.get('level'); }

  saveFormPerson() {
    this.person = { 
      "id": this.PersonForm.value.identification,
      "name": this.PersonForm.value.name,
      "lastname": this.PersonForm.value.lastname,
      "email": this.PersonForm.value.email,
      "skills": this.skills,
    }
    console.log(this.person);
    
    this.memberService.addMember(this.person).subscribe(result => {
      console.log(result);
      
    })
  }

  addNewSkill() {
    this.skills.push({ 'name': this.PersonForm.value.skill, level: this.PersonForm.value.level });
    this.PersonForm.patchValue({ askillddress: '' });
  }

  deleteSkill(index: number) {
    this.skills.splice(index, 1)
  }

}
