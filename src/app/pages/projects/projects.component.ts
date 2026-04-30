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
      title: 'Employee Management System',
      type: 'FullStack',
      icon: "layers",
      description: 'A comprehensive Java-based application designed to streamline employee management with secure authentication, role-based access control, and intuitive dashboards. Built with Jsp for the frontend, SpingBoot and Hibernate for the backend, and MySql for persistent data storage.',
      features: [
        'Role-based authentication and authorization',
        'Employee record management',
        'Impressive Dashboards'
      ],
      stack: ["React", "Node", "MongoDB", "JWT"],
      image: 'https://blog.thedigitalgroup.com/assets/uploads/Unravel_the_Top_Challenges_and_Solutions_Employee_Management_System.png',
      github: 'https://github.com/sivaprasadgandepalli/Mern-Authentication-System',
      live: ''
    }
    ,
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
      stack: ['React', 'Tailwind', 'OpenWeather API'],
      image: 'https://t4.ftcdn.net/jpg/06/30/19/93/240_F_630199356_SUwsv5QCV2lgbEjkKPzl7YA7mYK8YpZi.jpg',
      github: 'https://github.com/sivaprasadgandepalli/Forecastify',
      live: ''
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
      github: 'https://github.com/sivaprasadgandepalli/siva-prasad-portfolio',
      live: 'https://siva-prasad-portfolio-five.vercel.app/'
    },
    {
      title: 'Photosnap Multi-Page Website',
      type: 'Frontend',
      icon: "web",
      description: 'Responsive marketing site for a photo-sharing app built with CSS Grid.',
      features: [
        'Multi-page responsive layout',
        'Optimized for mobile, tablet, and desktop',
        'Hover states for interactive elements',
        'Professional design system integration'
      ],
      stack: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlpGa2TlS6LoN7fv70J7H3lV_QTrqPXxQ5A&s',
      github: 'https://github.com/sivaprasadgandepalli/Photosnap-website',
      live: ''
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
      stack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'https://t4.ftcdn.net/jpg/17/94/81/59/240_F_1794815965_epCn7qYP7to4dNeWOguHPCBCeACU3YnC.jpg',
      github: '',
      live: 'https://your-chat-demo.com'
    },
    {
      title: 'Link-Sharing App',
      type: 'Full-Stack',
      icon: "layers",
      description: 'A responsive app for developers to create, manage, and share personalized link collections.',
      features: [
        'Create, read, update, delete links',
        'Drag and drop to reorder links',
        'Responsive layouts for mobile, tablet, and desktop',
        'Preview and copy profile link',
      ],
      stack: ['React', 'Tailwind', 'Node', 'MongoDB'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9aABk5dg-VNWvhBUsbSS2r5KHc1OeeM9rWnHI-WEEhA&s',
      github: 'https://github.com/sivaprasadgandepalli/LinkSharePro-App',
      live: 'https://link-share-pro.vercel.app/'
    }
    ,
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
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Jwt'],
      image: 'https://t3.ftcdn.net/jpg/18/48/06/36/240_F_1848063605_LCkCtL3vU6YmusmAKSDAPjTidkPleX1u.jpg',
      github: 'https://github.com/sivaprasadgandepalli/Mern-Authentication-System',
      live: ''
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
      github: 'https://github.com/sivaprasadgandepalli/cryptoTracker',
      live: ''
    },
    {
      title: 'Food Ordering Website',
      type: 'Frontend',
      icon: "web",
      description: 'A responsive restaurant landing page showcasing featured dishes, menu categories, customer testimonials. Built to highlight modern UI/UX for food ordering and promotions.',
      features: [
        'Responsive multi-page layout',
        'Interactive menu categories',
        'Customer testimonials and ratings',
        'Cart functionality with order summary',
      ],
      stack: ["HTML", "CSS", "JavaScript"],
      image: 'https://restaurantly-delta.vercel.app/images/home.png',
      github: 'https://github.com/sivaprasadgandepalli/Pesto',
      live: 'https://restaurantly-delta.vercel.app/'
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
