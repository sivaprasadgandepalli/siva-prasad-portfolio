import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { QuoteComponent } from '../../shared/quote/quote.component';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  imports: [MatIconModule, QuoteComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  sendEmail(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    data.forEach((value, key) => {
      console.log(key, value);
    });

    emailjs.sendForm(
      'service_ut0ikpe',
      'template_dixrsr4',
      form,
      'vMdeyNqx5DCzq_GFI'
    )
      .then(() => alert('Message sent successfully!'))
      .catch((error) => console.error(error));
  }
}
