import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  formData = {
    name: '',
    email: '',
    contact: '',
    message: ''
  };

  constructor(private toastr: ToastrService) {
  }

  async send() {
    try {
      debugger;
      console.log('Sending email...', this.formData);
      emailjs.init('36k48feblFfzNo6EC');
      let response = await emailjs.send("service_ln0csvo", "template_0resc4n", {
        from_name: this.formData.name,
        to_name: "Admin",
        contact: this.formData.contact,
        message: this.formData.message,
        from_email: this.formData.email,

      });
      console.log('Email sent successfully!', response);
      this.toastr.success('Hello, world!', 'Success');
      this.formData = { name: '', email: '', contact: '', message: '' };
    } catch (error) {
      console.error('Error sending email:', error);
      this.toastr.error('Hello, world!', 'Error');
    }
  }
}
