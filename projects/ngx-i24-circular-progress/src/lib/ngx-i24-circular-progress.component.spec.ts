import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxI24CircularProgressComponent } from './ngx-i24-circular-progress.component';

describe('NgxI24CircularProgressComponent', () => {
  let component: NgxI24CircularProgressComponent;
  let fixture: ComponentFixture<NgxI24CircularProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxI24CircularProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxI24CircularProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
