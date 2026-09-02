import { TestBed } from '@angular/core/testing';

import { NgxI24CircularProgressService } from './ngx-i24-circular-progress.service';

describe('NgxI24CircularProgressService', () => {
  let service: NgxI24CircularProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxI24CircularProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
