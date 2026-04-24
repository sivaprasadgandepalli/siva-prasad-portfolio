import { Component, OnInit } from '@angular/core';
import { QuoteComponent } from '../../shared/quote/quote.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-experience',
  imports: [QuoteComponent, MatIconModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  skillSet = [
    {
      name: "Angular",
      icon: "code"
    },
    {
      name: "Postgres",
      icon: "storage"
    },
    {
      name: "NodeJs",
      icon: "dns"
    },
    {
      name: "REST APIs",
      icon: "api"
    },
    {
      name: 'TypeScript',
      icon: 'code'
    }
  ];
  constributions = [
    "Implemented responsive UI components using React, reducing mobile bounce rate by 15%.",
    "Automated unit testing with Jest, increasing codebase coverage from 40% to 85%.",
    "Optimized database indexing for the core reporting module, resulting in 3x faster queries.",
    "Collaborated with UI/UX designers to build a centralized Design System in Storybook."
  ];
  keyLearnings = [
    {
      name: "Cross-functional Collaboration",
      icon: "group"
    },
    {
      name: "Scalable System Design",
      icon: "architecture"
    },
    {
      name: "Clean Code Principles",
      icon: "code_blocks"
    }
  ];

  workflowTools = [
    {
      title: "Gitflow / GitHub",
      subTitle: "Version control & Peer reviews",
      icon: "merge"
    },
    {
      title: "Jira / Confluence",
      subTitle: "Sprint planning & Documentation",
      icon: "update"
    },
    {
      title: "CI/CD Pipelines",
      subTitle: "Automated builds & Deployments",
      icon: "sync_alt"
    }


  ];
  internships_education = [
    {
      title: "B.Tech. in Electronics & Communications",
      instituteName: "Aditya University",
      period: "Graduated 2024",
      grade: "GPA: 8.03 / 10.0",
      type: "education",
      icon: "school",
      imageUrl: ""
    },
    {
      title: "Java FullStack Intern",
      instituteName: "ExcelR",
      period: "Summer 2024",
      contribution: "Contributed to Employee Management project",
      type: "internship",
      icon: "work",
      imageUrl: "https://tse2.mm.bing.net/th/id/OIP.s25QZ8pU9lms0ydr2CWijwHaFj?pid=Api&P=0&h=180"
    },
    {
      title: "Mern Stack Trainee",
      instituteName: "Technical Hub",
      period: "Summer 2023",
      contribution: "Contributed to Vehicle Management project",
      type: "internship",
      icon: "work",
      imageUrl: "https://tse3.mm.bing.net/th/id/OIP.ApEszPpBWN8rrQrw9tYcQQHaEm?pid=Api&P=0&h=180"
    }
  ];

  ngAfterViewInit() {
    AOS.refresh();
  }

}
