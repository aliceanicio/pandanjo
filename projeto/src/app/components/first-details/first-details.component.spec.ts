import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDetailsComponent } from './first-details.component';

describe('FirstDetailsComponent', () => {
  let component: FirstDetailsComponent;
  let fixture: ComponentFixture<FirstDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
