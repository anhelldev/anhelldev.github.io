import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Message sent! I\'ll get back to you soon.');
  }
}
