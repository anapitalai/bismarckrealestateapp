import { ElementRef, ViewChild, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
//import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { Property } from '../../shared/models/property';
import { PropertyService } from '../../shared/services/property.service';

import config from '../../../config/keys';


@Component({
  styles: [`
  input.ng-valid.ng-touched{
    border-left:5px solid green;
  }
  input.ng-invalid.ng-touched{
    border-left:5px solid red;
  }

 `],
  templateUrl: './property-create.component.html'
})

export class PropertyCreateComponent implements OnInit {
  constructor(private http: Http, private router: Router, private service: PropertyService, private fb: FormBuilder) {

  }

  form: FormGroup;
  teacher: Property = { name: '', description: '', avatarImage: '' };
  errorMessage: string = '';
  successMessage: string = '';
  filesToUpload: Array<File> = [];

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      avatarImage: new FormControl('')
    });
  }



  onFileSelected(event) {
    this.filesToUpload = <Array<File>>event.target.files;
  }





  createTeacher() {
    this.successMessage = '';
    this.errorMessage = '';
    console.log(this.form);
    console.log(this.form.value);

    const files: Array<File> = this.filesToUpload;
    const fd = new FormData();

    for (let i = 0; i < files.length; i++) {
      fd.append("avatarImage", files[i], files[i]['name']);
    }
    fd.append('name', this.form.value.name);
    fd.append('description', this.form.value.description);


      //this.http.post('http://localhost:3007/teachers', fd)
      this.http.post(`${config.endPoint}/teachers`,fd)  
      .subscribe(res => {
        console.log(res);
      })
  }


  provinces: Array<string> = [
    'East New Britain',
    'West New Britain',
    'New Ireland',
    'Manus'
  ];

}


