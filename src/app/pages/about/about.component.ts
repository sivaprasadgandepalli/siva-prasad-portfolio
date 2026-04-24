import { Component } from '@angular/core';
import { RedirectCommand, RouterOutlet } from "@angular/router";
import { QuoteComponent } from '../../shared/quote/quote.component';
import { TimelineComponent } from '../../shared/timeline/timeline.component';
import { TimelineItem } from '../../models/model';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [QuoteComponent, TimelineComponent, MatIconModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  timelineData: TimelineItem[] = [
    {
      period: 'May 2025 - Present',
      title: 'Associate Consultant',
      subtitle: 'Bridgesoft Solutions',
      description: 'Working on enterprise IAM solutions, focusing on scalable backend systems and clean architecture.',
      type: 'experience'
    },
    {
      period: 'April 2024 - October 2024',
      title: 'Java Full Stack Internship',
      subtitle: 'ExcelR',
      description: 'Completed 800+ hours of intensive training in modern web technologies. Specialized in Spring Boot, React, and system architecture.',
      type: 'experience'
    },
    {
      period: '2020 - 2024',
      title: 'B.Tech - ECE',
      subtitle: 'Aditya University',
      description: 'Joined a fast-growing IT team to scale enterprise cloud solutions. Implementing microservices and leading front-end performance optimizations.',
      type: 'education'
    }
  ];
}
