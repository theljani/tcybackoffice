import { Component } from '@angular/core';
import {MdInputModule} from '@angular/material';
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
