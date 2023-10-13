import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { OurUser } from 'src/app/model/our-user';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    username:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email:['', [Validators.required, Validators.email]],
    psw:['', [Validators.required, Validators.minLength(9)]]
  })

  constructor(private fb: FormBuilder, private authServ: AuthService){}


  onSubmit(){
    const email = this.registerForm.value.email;
    const psw = this.registerForm.value.psw;

    const ourUser: OurUser = {
      username: this.registerForm.value.username!
    }

    this.authServ.registerUser(ourUser, email!, psw!)
  }

}
