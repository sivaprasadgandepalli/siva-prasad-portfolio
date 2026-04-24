import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { QuoteComponent } from '../../shared/quote/quote.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [MatIconModule, QuoteComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
