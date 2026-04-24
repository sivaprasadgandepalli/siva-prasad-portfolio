import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InfiniteScrollerComponent } from '../../components/infinite-scroller/infinite-scroller.component';
import { QuoteComponent } from '../../shared/quote/quote.component';
@Component({
  selector: 'app-home',
  imports: [MatIconModule, InfiniteScrollerComponent, QuoteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
