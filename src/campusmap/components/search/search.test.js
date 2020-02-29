import {
  describe, beforeEach, it, expect,
} from 'jest';
import { inject } from 'angular-mocks';

describe('search', () => {
  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('search'));

  // Test the controller
  describe('SearchController', () => {
    it('should create a `search` model with 3 results', inject(($componentController) => {
      const ctrl = $componentController('search');

      expect(ctrl.buildings.length).toBe(3);
    }));
  });
});
