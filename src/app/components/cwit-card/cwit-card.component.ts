import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cwit } from 'src/app/model/cwit';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cwit-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './cwit-card.component.html',
  styleUrls: ['./cwit-card.component.scss']
})
export class CwitCardComponent {
  @Input() cwit?:Cwit
}
