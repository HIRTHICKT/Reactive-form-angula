import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule} from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    userform : FormGroup = new FormGroup({
      Firstname : new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      lastname : new FormControl("",[Validators.required]),
      email : new FormControl("",[Validators.required,Validators.email]),
      phonno : new FormControl("",[Validators.pattern("^[0-9]{10}$"),Validators.required])
    });
    flag = false;
    check()
    {
      alert('Form is Valid')
    }
}