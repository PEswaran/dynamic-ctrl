import { TestBed } from '@angular/core/testing';

import { VariantBuilderService } from './variant-builder.service';

describe('VariantBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VariantBuilderService = TestBed.get(VariantBuilderService);
    expect(service).toBeTruthy();
  });
});
