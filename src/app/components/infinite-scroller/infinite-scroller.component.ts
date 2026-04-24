import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


interface Skill {
  name: string;
  icon: any;
}
@Component({
  selector: 'app-infinite-scroller',
  imports: [CommonModule, MatIconModule],
  templateUrl: './infinite-scroller.component.html',
  styleUrl: './infinite-scroller.component.scss'
})
export class InfiniteScrollerComponent implements OnInit {
  skills: Skill[] = [
    { name: 'Angular', icon: 'code' },
    { name: 'React', icon: 'integration_instructions' },
    { name: 'JavaScript', icon: 'code' },
    { name: 'TypeScript', icon: 'code' },
    { name: 'Node.js', icon: 'dns' },
    { name: 'Spring Boot', icon: 'memory' },
    { name: 'MongoDB', icon: 'storage' },
    { name: 'MySQL', icon: 'storage' },
    { name: 'Firebase', icon: 'cloud' },
    { name: 'Tailwind', icon: 'style' },
    { name: 'Java', icon: 'memory' },
    { name: 'Python', icon: 'code' }
  ];

  duplicatedSkills: Skill[] = [];

  ngOnInit(): void {
    this.duplicatedSkills = [...this.skills, ...this.skills];
  }
}
