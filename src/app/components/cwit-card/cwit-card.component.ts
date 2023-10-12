import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cwit } from 'src/app/model/cwit';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-cwit-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cwit-card.component.html',
  styleUrls: ['./cwit-card.component.scss']
})
export class CwitCardComponent {
  cwits: Cwit[] = [];

  constructor(private firestore: FirestoreService){}

  ngOnInit(): void {
    this.firestore.getCwits().then(data => {
      console.log(data)
      this.cwits = data as Cwit[]
    })
  }
}
