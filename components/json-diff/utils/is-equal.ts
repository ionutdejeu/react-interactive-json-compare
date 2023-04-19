import loIsEqual from 'lodash/isEqual';
import type { DifferOptions } from '../differ';

const isEqual = (a: any, b: any, options: DifferOptions) => {
  if (options.ignoreCase) {
    return typeof a === 'string' && typeof b === 'string' && a.toLowerCase() === b.toLowerCase();
  }
  if (options.recursiveEqual) {
    return loIsEqual(a, b);
  }
  return a === b;
};

export default isEqual;
