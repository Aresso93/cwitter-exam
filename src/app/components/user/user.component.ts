import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OurUser } from 'src/app/model/our-user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  
  user?: OurUser | null
  
  constructor(private authServ: AuthService){}

  ngOnInit(): void {
    this.authServ.ourUser.subscribe(arrivingUser =>{
      this.user = arrivingUser
      console.log(this.user);
    });
    
  }



}



//username: Braresca
//indirizzo mail: bra.resca@fakemail.com
//password: superpippo
