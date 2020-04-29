/* eslint-disable prefer-const */
import {giveMeSomething, Something} from 'core/lib/util';

export function works(): any {
  const result = giveMeSomething();
  return result as any;
}

export function fails(): any {
  let result: Something | undefined;
  result = giveMeSomething();
  return result as any;
}
