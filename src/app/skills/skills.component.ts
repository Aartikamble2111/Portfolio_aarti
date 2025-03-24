import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        // Initial styles
        style({ opacity: 0, transform: 'translateY(20px)' }),
        // Animate to visible state
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('listAnimation', [
      transition(':enter', [
        query('.skill', [
          style({ opacity: 0, transform: 'translateX(-20px)' }),
          stagger(100, animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))),
        ]),
      ]),
    ]),
  ],
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', percentage: 90, color: 'rgb(181, 183, 188)' },
    { name: 'CSS', percentage: 85, color: 'rgb(181, 183, 188)' },
    { name: 'JAVASCRIPT', percentage: 95, color: 'rgb(181, 183, 188)' },
    { name: 'ANGULAR', percentage: 90, color: 'rgb(181, 183, 188)' },
    { name: 'TYPESCRIPT', percentage: 70, color: 'rgb(181, 183, 188)' },
    { name: 'ANGULAR MATERIAL', percentage: 80, color: 'rgb(181, 183, 188)' },
  ];
    constructor (private titleservice:Title) {
        this.titleservice.setTitle('Aarti kamble - Skills ')
      }
      scrollToSection(skills: string) {
        console.log('Scrolling to section:', skills); // Debugging line
        const element = document.getElementById(skills);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
}
