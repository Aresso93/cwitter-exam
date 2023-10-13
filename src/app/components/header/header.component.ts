import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { RouterModule } from '@angular/router';
import { User } from 'firebase/auth';
import { FirestoreService } from 'src/app/services/firestore.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: User | null = null;

  constructor(private authServ: AuthService, private fireServ: FirestoreService){
    this.authServ.firebaseUser.subscribe(firebaseUser => this.user = firebaseUser )
  }

  logout(){
    this.authServ.logOut()
  }

}
