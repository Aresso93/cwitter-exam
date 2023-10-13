import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from 'src/app/services/firestore.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Cwit } from 'src/app/model/cwit';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import { OurUser } from 'src/app/model/our-user';

@Component({
  selector: 'app-new-cwit',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './new-cwit.component.html',
  styleUrls: ['./new-cwit.component.scss']
})
export class NewCwitComponent {

  cwitText: string = ''
  cwitUrl: string = ''
  ourCwit?: Cwit
  fireUser?: User
  user?: OurUser

  constructor(private firestoreServ: FirestoreService, private authServ: AuthService){}

  getSingleUser(){
    this.authServ.firebaseUser.subscribe(arrivingFireUser=>{
      if (arrivingFireUser) {
        this.fireUser = arrivingFireUser
        console.log(this.fireUser);

      }
    })

  }

  getOurUser(){
    this.authServ.ourUser.subscribe(arrivingUser =>{
      if (arrivingUser) {
        this.user = arrivingUser
        console.log(this.fireUser);

      }
    })
  }

  postCwit() {
    this.getOurUser()
    this.getSingleUser()
    if (this.cwitText.trim() !== '') {
      const cwit = {
          text: this.cwitText,
          author: this.fireUser!.uid,
          authorName: this.user!.username,
          creationTime: new Date,
          url: this.cwitUrl

      };
      this.firestoreServ.postCwit(cwit as Cwit);
            this.cwitText = '';
  }

  }
}
