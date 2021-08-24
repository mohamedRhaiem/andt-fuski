import { isArray } from 'lodash';

export const buildDisplay = (item: any, params: string | string[]) => {
  if (isArray(params)) {
    return item[params[0]] + '-' + item[params[1]];
  }
  return item[params];
};
