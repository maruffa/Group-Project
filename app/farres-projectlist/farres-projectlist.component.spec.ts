import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarresProjectlistComponent } from './farres-projectlist.component';

describe('FarresProjectlistComponent', () => {
  let component: FarresProjectlistComponent;
  let fixture: ComponentFixture<FarresProjectlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarresProjectlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarresProjectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
