import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/service';
import { FormGroup } from '@angular/forms';
import { Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login.html'

})
export class LoginComponent {
  registerForm: FormGroup;
  constructor(public studservice: StudentService, public router: Router, public fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: [
        null,
        [
          Validators.required
        ]
      ],
      password: [null, [Validators.required]]
    });
  }


  login(data){
this.studservice.login(data.value).subscribe(result => {

 alert('hey');

});

  }

}
