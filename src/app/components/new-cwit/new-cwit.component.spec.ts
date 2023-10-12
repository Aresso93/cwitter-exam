import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCwitComponent } from './new-cwit.component';

describe('NewCwitComponent', () => {
  let component: NewCwitComponent;
  let fixture: ComponentFixture<NewCwitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewCwitComponent]
    });
    fixture = TestBed.createComponent(NewCwitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
