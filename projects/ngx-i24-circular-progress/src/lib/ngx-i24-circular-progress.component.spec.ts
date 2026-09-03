import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxI24CircularProgress } from './ngx-i24-circular-progress.component';

describe('NgxI24CircularProgressComponent', () => {
  let component: NgxI24CircularProgress;
  let fixture: ComponentFixture<NgxI24CircularProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NgxI24CircularProgress ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxI24CircularProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
