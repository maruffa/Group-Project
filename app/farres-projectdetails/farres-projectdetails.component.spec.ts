import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarresProjectdetailsComponent } from './farres-projectdetails.component';

describe('FarresProjectdetailsComponent', () => {
  let component: FarresProjectdetailsComponent;
  let fixture: ComponentFixture<FarresProjectdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarresProjectdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarresProjectdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
