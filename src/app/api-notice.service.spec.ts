import { TestBed } from '@angular/core/testing';

import { ApiNoticeService } from './api-notice.service';

describe('ApiNoticeService', () => {
  let service: ApiNoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
