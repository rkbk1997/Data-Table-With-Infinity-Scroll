import { TestBed } from '@angular/core/testing';

import { TableconfigService } from './tableconfig.service';

describe('TableconfigService', () => {
  let service: TableconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
