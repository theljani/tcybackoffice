import { Component } from '@angular/core';
import {MdSelectModule} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  constructor(private _router: Router) {}


  certificationLinks = [
    {
      label: 'Certifications',
      link: '/certifications-tool'
    },
    {
      label: 'Certifications-Categories',
      link: '/certifications-tool/categories'
    },
    {
      label: 'Certifications-Activities',
      link: '/certifications-tool/activities'
    },
    {
      label: 'Certifications-Countries',
      link: '/certifications-tool/countries'
    }
  ];

  selectedEntityLink = this.certificationLinks[0].link;

  onSelectEntityChanged(event) {
    this.selectedEntityLink = event.value;
    this._router.navigate([event.value]);
  }
  isCurrent(route: string): string {
    if(this._router.isActive(route, true)) {
     return "active isCurrent";
    }

    return "";
  }

   myErrorStateMatcher(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    // Error when invalid control is dirty, touched, or submitted
    const isSubmitted = form && form.submitted;
    return !!(control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
