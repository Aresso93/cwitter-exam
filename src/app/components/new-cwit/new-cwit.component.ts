import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from 'src/app/services/firestore.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-new-cwit',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './new-cwit.component.html',
  styleUrls: ['./new-cwit.component.scss']
})
export class NewCwitComponent {
  constructor(private firestoreServ: FirestoreService){}

  postCwit(){
    this.firestoreServ.postCwit
  }
}
