import { TestBed } from '@angular/core/testing';

import { MatchlistService } from './matchlist.service';

describe('MatchlistService', () => {
  let service: MatchlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
