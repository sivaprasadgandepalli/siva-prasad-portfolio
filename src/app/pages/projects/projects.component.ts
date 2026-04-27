import { Component, OnInit } from '@angular/core';
import { QuoteComponent } from '../../shared/quote/quote.component';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-projects',
  imports: [QuoteComponent, CommonModule, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  activeTab: string = "All";
  projectTabs: string[] = [
    "All", "FullStack", "APIIntegration", "Frontend"
  ]
  filteredProjects: any[] = [];
  projectsList = [
    {
      title: 'E-Commerce Dashboard',
      type: 'FullStack',
      icon: "layers",
      description: 'Admin dashboard to manage products, orders, and analytics.',
      features: [
        'Role-based authentication',
        'Real-time order tracking',
        'Sales analytics charts'
      ],
      stack: ['Angular', 'Node.js', 'MongoDB'],
      image: 'https://media.istockphoto.com/id/1449490038/photo/online-shopping-and-e-commerce-technology-concept-shopper-using-computer-laptop-to-input.webp?a=1&b=1&s=612x612&w=0&k=20&c=UV8-hsrRpcoh3lhM-bqJixmZW6Fskg88aBjp-b151Mc=',
      github: 'https://github.com/yourrepo/ecommerce',
      live: 'https://your-ecommerce-demo.com'
    },
    {
      title: 'Weather Insights App',
      type: 'APIIntegration',
      icon: "api",
      description: 'Displays real-time weather data with location-based insights.',
      features: [
        'Geo-location detection',
        'Weather API integration',
        'Dynamic UI updates'
      ],
      stack: ['Angular', 'OpenWeather API'],
      image: 'https://t4.ftcdn.net/jpg/06/30/19/93/240_F_630199356_SUwsv5QCV2lgbEjkKPzl7YA7mYK8YpZi.jpg',
      github: 'https://github.com/yourrepo/weather',
      live: 'https://your-weather-demo.com'
    },
    {
      title: 'Portfolio Website',
      type: 'Frontend',
      icon: "web",
      description: 'Responsive personal portfolio showcasing projects and skills.',
      features: [
        'Responsive design',
        'Glassmorphism UI',
        'Smooth scroll animations'
      ],
      stack: ['HTML', 'CSS', 'Angular'],
      image: 'https://t3.ftcdn.net/jpg/16/01/78/16/240_F_1601781607_W6QX0G2F9fKrf8HJiS0VzyYzSS4EvqR4.jpg',
      github: 'https://github.com/yourrepo/portfolio',
      live: 'https://your-portfolio.com'
    },
    {
      title: 'Task Management System',
      type: 'FullStack',
      icon: "layers",
      description: 'Kanban-style task manager with team collaboration.',
      features: [
        'Drag and drop tasks',
        'User authentication',
        'Real-time updates'
      ],
      stack: ['Angular', 'Firebase'],
      image: 'https://t3.ftcdn.net/jpg/17/82/54/96/240_F_1782549612_lGf3biZwfqJ9llDHGENM4EWDAnp5bJd7.jpg',
      github: 'https://github.com/yourrepo/task',
      live: 'https://your-task-demo.com'
    },

    {
      title: 'Chat Application',
      type: 'FullStack',
      icon: "layers",
      description: 'Real-time chat app with private and group messaging.',
      features: [
        'WebSocket-based messaging',
        'Online/offline status',
        'Typing indicators'
      ],
      stack: ['Angular', 'Node.js', 'Socket.io'],
      image: 'https://t4.ftcdn.net/jpg/17/94/81/59/240_F_1794815965_epCn7qYP7to4dNeWOguHPCBCeACU3YnC.jpg',
      github: 'https://github.com/yourrepo/chat',
      live: 'https://your-chat-demo.com'
    },
    {
      title: 'Finance Tracker',
      type: 'Frontend',
      icon: "web",
      description: 'Personal expense tracker with visual analytics.',
      features: [
        'Interactive charts',
        'Category-based filtering',
        'Local storage persistence'
      ],
      stack: ['Angular', 'Chart.js'],
      image: 'https://t3.ftcdn.net/jpg/19/66/48/00/240_F_1966480078_x5wuXCcPTObT42vVrL6g6xWRytKonIkr.jpg',
      github: 'https://github.com/yourrepo/finance',
      live: 'https://your-finance-demo.com'
    },
    {
      title: 'Authentication System',
      type: 'FullStack',
      icon: "layers",
      description: 'Secure authentication system with JWT and role management.',
      features: [
        'JWT-based auth',
        'Role-based access control',
        'Password hashing'
      ],
      stack: ['Node.js', 'Express', 'MongoDB'],
      image: 'https://t3.ftcdn.net/jpg/18/48/06/36/240_F_1848063605_LCkCtL3vU6YmusmAKSDAPjTidkPleX1u.jpg',
      github: 'https://github.com/yourrepo/auth',
      live: 'https://your-auth-demo.com'
    },

    {
      title: 'Stock Price Dashboard',
      type: 'APIIntegration',
      icon: "api",
      description: 'Real-time stock tracking dashboard with charts.',
      features: [
        'Live API data',
        'Time-series charts',
        'Search + watchlist'
      ],
      stack: ['Angular', 'Alpha Vantage API'],
      image: 'https://t4.ftcdn.net/jpg/07/04/01/05/240_F_704010559_VpolMnMC8MBH9uvKKlIljzSKqMNnGzgc.jpg',
      github: 'https://github.com/yourrepo/stocks',
      live: 'https://your-stocks-demo.com'
    }

  ];

  ngOnInit(): void {
    this.filteredProjects = [...this.projectsList];
  }
  filterProjects(type: string) {
    this.activeTab = type;

    if (type === 'All') {
      this.filteredProjects = [...this.projectsList];
    } else {
      this.filteredProjects = this.projectsList.filter(
        project => project.type === type
      );
    }

    setTimeout(() => {
      AOS.refresh(); // 🔥 mandatory
    }, 0);
  }
}
