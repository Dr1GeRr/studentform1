import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.scss']
})
export class PersonalDetailsFormComponent {
  personalDetailsForm = this.fb.group({
    hobby: ['', Validators.required],
    // Define more controls as needed
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.personalDetailsForm.valid) {
      console.log('Final Form Submitted!', this.personalDetailsForm.value);
      // Optionally handle the submission, like sending to a backend server
    }
  }
}
