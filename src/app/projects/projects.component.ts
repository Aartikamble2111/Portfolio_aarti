import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'VESSEL BUNKERING MANAGEMENT',
      description: 'Developed Angular based UIs integrated with Restful APIs.',
      details: [
        'Designed responsive and visually appealing layouts.',
        'Ensured compatibility across different browsers.',
      ],
      technologies: 'Angular, Node.js',
    },
    {
      title: 'BIZINTELLIGENCE',
      description: 'Integrated multiple APIs to fetch and display data in real-time.',
      details: [
        'Enhanced the functionality of the application.',
        'Designed and implemented the user interface using Angular.',
      ],
      technologies: 'Angular, Node.js',
    },
    {
      title: 'JOTERP 2.0',
      description: 'Designed and implemented the user interface using Angular.',
      details: [],
      technologies: 'Angular, Node.js',
    },
  ];
    constructor (private titleservice:Title) {
        this.titleservice.setTitle('Aarti kamble - Projects ')
      }
      scrollToSection(projects: string) {
        console.log('Scrolling to section:', projects); // Debugging line
        const element = document.getElementById(projects);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
}
