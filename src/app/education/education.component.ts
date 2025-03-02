import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationDetails = [
   
    {
      degree: 'Bachelor of Computer Science',
      university: 'Mumbai University',
      year: '2015 - 2018',
      // description: 'Focused on software development, algorithms, and data structures.',
      expanded: true, // Default to expanded
    },
    // {
    //   degree: 'High School',
    //   university: 'Greenwood High School',
    //   year: '2014 - 2016',
    //   // description: 'Studied core subjects like Mathematics, Physics, and Computer Science.',
    //   expanded: false,
    // },
   
  ];

    constructor (private titleservice:Title) {
        this.titleservice.setTitle('Aarti kamble - Education ')
      }
      toggleDetails(education: any) {
        education.expanded = !education.expanded;
      }
      scrollToSection(education: string) {
        console.log('Scrolling to section:', education); // Debugging line
        const element = document.getElementById(education);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
}
