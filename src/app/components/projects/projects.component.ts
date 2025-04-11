import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      topPosition: 0,
      title: 'PAPER SETTINGS (Online Exams learning and assessment platform)',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['Angular', '.NET Core', 'MS-SQL', 'Bootstrap', 'Angular Material', 'Azure'],
      myRole: 'Full Stack Developer',
      description: 'The Learning Management Studio is a comprehensive web-based platform designed to facilitate online learning and assessment processes. This project aims to provide a user friendly interface for administrators to create and manage exams, as well as for candidates to access and complete these exams. The system supports three types of exams: Multiple Choice, Free Text, and Single Choice, catering to a variety of assessment needs'
    },
    {
      topPosition: 68,
      title: 'MGE (Mastercard Gamer Exchange)',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['Angular', '.NET Core', 'MS-SQL', 'Azure', 'Bootstrap', 'Stripe', 'Material UI', 'Google Location', 'TypeScript', 'SMTP Server', 'IIS', 'Gmail Passkey'],
      myRole: 'Full Stack Developer',
      description: ' The Mastercard Gaming Exchange is a cutting-edge gaming portal powered by Mastercard, designed to revolutionize the gaming experience for users worldwide. Leveraging the advanced capabilities of Mastercard s technology, this platform aims to provide seamless and secure transactions for purchasing gaming vouchers and topping up gaming accounts.'
    },
    {
      topPosition: 136,
      title: 'Traiq Sweets & Bakes (ERP)',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['Angular', '.Net Core', 'SQL', 'Material UI', 'Bootstrap CSS', 'Google Maps', 'TypeScript', 'SMTP Server', 'IIS', 'Bank Transaction', 'Jazz Cash', 'EasyPaisa'],
      myRole: 'Full Stack Developer',
      description: ' The Traiq Sweets & Bakes is an ERP-type project to online order and then pay by micro-bank, bank payment, and cash on delivery, designed to revolutionize online orders for users in close branches. Leveraging the advanced capabilities of Microservices, this platform aims to provide seamless and secure transactions for purchasing products and custom cakes'
    },
    {
      topPosition: 204,
      title: 'CRM (Customer Relationship Management)',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['Angular', 'Bootstrap', 'SCSS', 'Boiler Plate', 'Azure Blob'],
      myRole: 'Full Stack Developer',
      description: 'The CRM is a cutting-edge Customer Relationship Management powered by Karma Software Solution, designed to revolutionize customer relationship management for users worldwide. Leveraging the advanced capabilities of Karma Software Solution, this platform aims to provide seamless and secure transactions for customer relationship management systems.'
    },
  ];
}
