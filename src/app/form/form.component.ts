import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  userData: any;
  submitted = false;


  onSubmit(form: any) {
    this.submitted = true;
    this.userData = form.value;  // รับข้อมูลจากฟอร์ม
  }
}
