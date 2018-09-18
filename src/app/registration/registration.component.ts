import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/service';

@Component({
  selector: 'registration-comp',
  templateUrl: './registration.html'

})

export class RegistrationComponent{
  constructor(public studservice: StudentService, public router: Router) {

  }
  registration(reg){
    this.studservice.postStudent(reg.value).subscribe(result =>{
     alert('reg');
    });
  }

}
