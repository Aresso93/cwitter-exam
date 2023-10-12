import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cwit } from 'src/app/model/cwit';

@Component({
  selector: 'app-cwit-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cwit-card.component.html',
  styleUrls: ['./cwit-card.component.scss']
})
export class CwitCardComponent {
  @Input() cwit?:Cwit
}
