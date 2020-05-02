import {
  describe, beforeEach, it, expect,
} from 'jest';
import { inject } from 'angular-mocks';

describe('campusMap', () => {
  // Load the module that contains the `campusMap` component before each test
  beforeEach(module('campusMap'));

  // Test the controller
  describe('mapController', () => {
    it('should render properly', inject(($componentController) => {
      const ctrl = $componentController('map');

      expect(ctrl).not.toBeNull();
    }));
  });
});
