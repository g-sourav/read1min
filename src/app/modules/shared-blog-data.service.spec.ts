import { TestBed } from '@angular/core/testing';

import { SharedBlogDataService } from './shared-blog-data.service';

describe('SharedBlogDataService', () => {
  let service: SharedBlogDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedBlogDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
