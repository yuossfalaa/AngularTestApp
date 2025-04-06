import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { invalidName } from './invalidName';
@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = new FormGroup({
    senderName: new FormControl('', [Validators.required, invalidName]),
    senderEmail: new FormControl('', [Validators.required, Validators.email]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  });




  submetForm() {
    if (this.contactForm.valid) {
      alert("Valid form submitted");
    }
    else {
      alert("Invalid form submitted");
    }
  }
}
