import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formgroup',
  standalone: false,
  
  templateUrl: './formgroup.component.html',
  styleUrl: './formgroup.component.css'
})
export class FormgroupComponent {
  userForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    // สร้างฟอร์มโดยใช้ FormBuilder
    this.userForm = this.fb.group({
      name: ['', Validators.required],  // กำหนดค่าพื้นฐานเป็นค่าว่างและตรวจสอบว่าเป็น required
      email: ['', [Validators.required, Validators.email]]  // ตรวจสอบทั้ง required และ email format
    });
  }

  // ฟังก์ชันสำหรับ submit ฟอร์ม
  onSubmit() {
    this.submitted = true;

    // หากฟอร์มไม่ valid ก็ไม่ส่งข้อมูล
    if (this.userForm.invalid) {
      return;
    }

    // เมื่อฟอร์ม valid แสดงผลข้อมูลที่กรอก
    console.log(this.userForm.value);
  }
}
