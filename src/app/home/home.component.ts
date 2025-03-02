import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor (private titleservice:Title) {
    this.titleservice.setTitle('Aarti kamble - Home ')
  }
  scrollToSection(contact: string) {
    console.log('Scrolling to section:', contact); // Debugging line
    const element = document.getElementById(contact);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
