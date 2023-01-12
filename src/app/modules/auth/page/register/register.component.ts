import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators, AbstractControl, AbstractControlOptions } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  formRegister= new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
    confirmPassword: new FormControl('', [Validators.minLength(6), Validators.required]),
    name: new FormControl('', [Validators.minLength(6), Validators.maxLength(40)])
  }, [this.MatchValidator('password', 'confirmPassword')])

  // @ts-ignore
  dataUserName = ''

  
  constructor(public activeRouter: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.activeRouter.paramMap
        .pipe(map(() => window.history.state))
        .subscribe(state => {
          this.dataUserName = state.tempUser
        })
  }
  
  MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { notMatch: true }
        : null;
    };
  }

  submit() {
     const values = this.formRegister.value;
     const {email, password, confirmPassword, name} = values;
     console.log(this.formRegister)
     
  }
}
