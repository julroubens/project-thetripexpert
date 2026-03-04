import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

// TODO: Replace these with your actual EmailJS values
const EMAILJS_SERVICE_ID = 'service_4341bqo';
const EMAILJS_TEMPLATE_ID = 'template_7l7f8d8';
const EMAILJS_PUBLIC_KEY = '94VenxzpoUrAZ7MmR';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    destination: '',
    message: ''
  };

  submitted = false;
  isSubmitting = false;
  errorMessage = '';

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const templateParams = {
      full_name: this.formData.name,
      email: this.formData.email,
      dream_destination: this.formData.destination,
      message: this.formData.message
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY
      })
      .then(
        () => {
          this.submitted = true;
          this.isSubmitting = false;
          this.formData = {
            name: '',
            email: '',
            destination: '',
            message: ''
          };

          setTimeout(() => {
            this.submitted = false;
          }, 3000);
        },
        () => {
          this.errorMessage =
            'Sorry, something went wrong while sending your message. Please try again later.';
          this.isSubmitting = false;
        }
      );
  }
}
