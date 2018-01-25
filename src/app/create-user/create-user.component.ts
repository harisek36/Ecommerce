import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  titleAlert = 'can\'t be blank';
  rForm: FormGroup;
  post: any;
  emailAddress: string;
  firstName: string;
  lastName: string;

  isActive: boolean;
  password: string;
  passwordCheck: string;
  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'f_emailAddress': [null, Validators.compose( [Validators.required, Validators.email])],
      'f_firstName': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      'f_lastName': [null, Validators.required],
      'f_password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'f_passwordCheck': [null, Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  ngOnInit() {
    this.rForm.get('validateCheckbox').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.isActive = true;
        }else {
          this.isActive = false;
        }
      }
    );
  }
  addPost(post) {
    this.emailAddress = post.f_emailAddress;
    this.firstName = post.f_firstName.trim();
    this.lastName = post.f_lastName.trim();

    this.password = post.f_password();
  }
}
