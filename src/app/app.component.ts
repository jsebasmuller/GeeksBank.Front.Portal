import { ResultsService } from './../services/results.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'gb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoad: boolean = false;
  bankForm: FormGroup;
  constructor(private fb: FormBuilder, private resultsService: ResultsService){
    this.bankForm = this.fb.group({
      number1: ['', [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]],
      number2: ['', [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]]
    })
  }

  ngOnInit(){

  }

  get number1(){
    return this.bankForm.get('number1');
  }

  get number2(){
    return this.bankForm.get('number2');
  }

  calculate(){
    if(this.bankForm.valid && this.number1 && this.number2){
      this.isLoad = true;
      this.resultsService.addResults(this.number1.value, this.number2.value).subscribe(res => {
        if(res){
          Swal.fire({
            icon: 'success',
            title: 'Operación exitosa',
            text: 'El resultado de la operación es ' + res.result + (res.isInFibonacci ? ' y se encuentra en la serie fibonacci' : ' y no se encuentra en la serie fibonacci')
          });
          this.isLoad = false;
          this.bankForm.reset();
        }
      }, err=> {
        if(err){
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error',
            text: 'Ha ocurrido un error, por favor vuelve a intentarlo'
          });
          this.isLoad = false;
        }
      });
    }else{
      Object.keys(this.bankForm.controls).forEach(field => {
        const control = this.bankForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
