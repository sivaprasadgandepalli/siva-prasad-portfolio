import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-quote',
  imports: [CommonModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  @Input() text: string = '';
  @Input() showDot: boolean = true;
  @Input() weight: 'normal' | 'bold' | 'bolder' = 'normal';
}
