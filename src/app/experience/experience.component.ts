import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Angular Developer',
      date: 'Apr 2023 - Aug 2024',
      company: 'Enix Software Development Pvt Ltd',
      responsibilities: [
        'Developed dynamic and responsive user interfaces using Angular and Bootstrap, enhancing user experience and interface adaptability.',
        'Integrated RESTful APIs to fetch and display data within the Angular application, ensuring seamless data flow and functionality.',
        'Collaborated closely with clients to understand their requirements and goals, translating them into effective design solutions.',
      ],
    },
    {
      title: 'Front-End Developer',
      date: 'Jan 2022 - Jan 2023',
      company: 'Infostack Software Development',
      responsibilities: [
        'Created user interfaces using HTML, CSS, and JavaScript.',
        'Implemented Angular services, components, directives, and pipes to build scalable and maintainable front-end applications.',
        'Applied responsive design principles to ensure optimal viewing experiences across various devices and screen sizes.',
      ],
    },
  ];

  constructor (private titleservice:Title) {
          this.titleservice.setTitle('Aarti kamble - Experience ')
        }
        scrollToSection(experience: string) {
          console.log('Scrolling to section:', experience); // Debugging line
          const element = document.getElementById(experience);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
}
