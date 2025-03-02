import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactDetails = [
    { emoji: '📍', label: 'Address', value: 'Abu Shagara, Sharjah UAE' },
    { emoji: '📞', label: 'Contact Number', value: '971561787404' },
    { emoji: '📧', label: 'Email Address', value: 'kambleaarti2111@gmail.com' },
    // { emoji: '🌐', label: 'Website', value: 'yoursite.com' },
  ];
  constructor (private titleservice:Title) {
    this.titleservice.setTitle('Aarti kamble - Contact ')
  }
  // Form data model
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  // Handle form submission
  onSubmit() {
    const emailPayload = {
      to: 'kambleaarti2111@example.com', // Replace with your email
      subject: this.formData.subject,
      text: `Name: ${this.formData.name}\nEmail: ${this.formData.email}\nMessage: ${this.formData.message}`,
    };

    // For demonstration, log the email payload
    console.log('Email Payload:', emailPayload);

    // Reset the form after submission
    this.formData = { name: '', email: '', subject: '', message: '' };
    alert('Message sent successfully!');
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
