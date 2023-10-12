import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-new-cwit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-cwit.component.html',
  styleUrls: ['./new-cwit.component.scss']
})
export class NewCwitComponent {
  constructor(private firestoreServ: FirestoreService){}
}
