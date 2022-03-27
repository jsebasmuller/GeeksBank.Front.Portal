import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavMenuComponent } from './nav-menu.component';

import { appReducers } from '@core/store/app.reducers';
import { StoreModule } from '@ngrx/store';
import { PipesModule } from '@core/pipes/pipes.module';
import { PaymentSummaryModule } from '../payment-summary/payment-summary.module';
import { SearchModule } from '../search/search.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavMenuComponent,
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        
        ReactiveFormsModule,
        StoreModule.forRoot(appReducers),
        PipesModule,
        PaymentSummaryModule,
        SearchModule
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
