import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {
  empForm: FormGroup;

  education: string[] = [
    "Advanced Level",
    "Diploma",
    "Undergraduate",
    "Graduate",
    "Post Graduate"
  ];

  constructor(
    private formBuilder: FormBuilder,
    private empService: EmployeeService,
    private dialog: DialogRef<EmpAddEditComponent>
  ) {
    this.empForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
  }

  onFormSubmit() {
    if(this.empForm.valid) {
      this.empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert("Employee Added successfully");
          this.dialog.close();
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

}
