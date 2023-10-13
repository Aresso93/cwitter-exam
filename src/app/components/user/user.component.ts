import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OurUser } from 'src/app/model/our-user';
import { AuthService } from 'src/app/services/auth.service';
import { Cwit } from 'src/app/model/cwit';
import { User } from 'firebase/auth';
import { CwitCardComponent } from "../cwit-card/cwit-card.component";
import { FirestoreService } from 'src/app/services/firestore.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        CwitCardComponent,
        MatCardModule
    ]
})
export class UserComponent implements OnInit{

  user?: OurUser | null
  fireUser?: User | null
  cwit?:Cwit
  userCwits: Cwit[] = []

  constructor(private authServ: AuthService, private firestore: FirestoreService){}

  ngOnInit(): void {
    this.authServ.ourUser.subscribe(arrivingUser =>{
      this.user = arrivingUser
      console.log(this.user);

    });

    this.authServ.firebaseUser.subscribe(arrivingFireUser=>{
      if (arrivingFireUser) {
        this.fireUser = arrivingFireUser
        console.log(this.fireUser);
        this.loadUserCwits(this.fireUser.uid)

      }
    })
  }

  loadUserCwits(uid: string){
    this.firestore.loadUserCwits(uid).then(cwits => {

      this.userCwits = cwits
      console.log(this.userCwits);
    })
  }

}



//username: Braresca
//indirizzo mail: bra.resca@fakemail.com
//password: superpippo
