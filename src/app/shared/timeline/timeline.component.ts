import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TimelineItem } from '../../models/model';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-timeline',
  imports: [CommonModule, MatIconModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {
  @Input() items: TimelineItem[] = [];
  isMobile = false;

  ngOnInit() {
    this.checkScreen();
    window.addEventListener('resize', () => this.checkScreen());
  }

  checkScreen() {
    this.isMobile = window.innerWidth <= 600;
  }

  getIcon(type?: string) {
    switch (type) {
      case 'education': return 'school';
      case 'experience': return 'work';
      case 'training': return 'verified';
      default: return 'circle';
    }
  }
}
