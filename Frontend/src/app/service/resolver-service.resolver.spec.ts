import { TestBed } from '@angular/core/testing';

import { ResolverServiceResolver } from './resolver-service.resolver';

describe('ResolverServiceResolver', () => {
  let resolver: ResolverServiceResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ResolverServiceResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
