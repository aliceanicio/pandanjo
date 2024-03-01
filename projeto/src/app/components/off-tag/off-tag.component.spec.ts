import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffTagComponent } from './off-tag.component';

describe('OffTagComponent', () => {
  let component: OffTagComponent;
  let fixture: ComponentFixture<OffTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
