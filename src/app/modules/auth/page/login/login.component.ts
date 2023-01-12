import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms"
import { AuthService } from 'src/app/core/service/auth.service';
import {catchError, finalize} from "rxjs"
import { Router } from '@angular/router';
import { LocalService } from 'src/app/data/service/localStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  formGroup = new FormGroup<{
    email: FormControl,
    password: FormControl,
    isChecked: FormControl
  }>({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
    isChecked: new FormControl(false)
  }) 
  
  
  constructor(
    private authService: AuthService,
    private routerService: Router,
    private localService: LocalService
  )
  {
    
  }

  ngOnInit(): void {
     
  }

  submit() {
     if (this.formGroup.get('isChecked')?.value == true) {
      console.log("Form valid nee")
      return
     } else {
      Object.keys(this.formGroup.controls).forEach(field => {
        const control = this.formGroup.get(field);           
        control?.markAsTouched({ onlySelf: true });      
      });

      const userData = this.formGroup.value;
      this.authService.login({
        username: userData.email,
        password: userData.password
      })
      .subscribe(data => {
        this.localService.saveData("TOKEN", data.token)
        this.routerService.navigate(["/products"])
      })

      // recursion validate DFS

      // validateAllFormFields(formGroup: FormGroup) {         //{1}
      //   Object.keys(formGroup.controls).forEach(field => {  //{2}
      //     const control = formGroup.get(field);             //{3}
      //     if (control instanceof FormControl) {             //{4}
      //       control.markAsTouched({ onlySelf: true });
      //     } else if (control instanceof FormGroup) {        //{5}
      //       this.validateAllFormFields(control);            //{6}
      //     }
      //   });
      // }

     }

  }
}
