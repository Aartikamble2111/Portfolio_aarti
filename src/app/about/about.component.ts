import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  profile = {
    name : 'Aarti Vivek Kamble',
    position : 'Angular Developer',
    dob : 'November 21, 1997',
    address : 'Abu Shagara, Sharjah UAE',
    email : 'kambleaarti2111@gmail.com',
    phone : '971561787404',
  };

  constructor(private route: ActivatedRoute, private titleservice:Title) {
    this.titleservice.setTitle('Aarti kamble - About ')
  }

  ngOnInit(): void {
    // Scroll to the fragment if the URL contains a fragment
   
  }

  downloadCV() {
    const fileUrl = 'assets/files/Aartikamble_CV.pdf'; // Path to the CV file
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'Aartikamble_CV.pdf'; // The name for the downloaded file
    anchor.click();
  }
  scrollToSection(about: string) {
    console.log('Scrolling to section:', about); // Debugging line
    const element = document.getElementById(about);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
