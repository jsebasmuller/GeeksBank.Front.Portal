import {
  Component,
  Inject,
  Input,
  LOCALE_ID,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare const bootstrap: any;

@Component({
  selector: 'gb-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  public location: string | undefined;

  isRent = true;
  focus: boolean = false;

  showed = false;

  constructor(
    private route: ActivatedRoute,
    @Inject(LOCALE_ID) public language: string,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }
}
