import { Pipe, PipeTransform } from '@angular/core';
import { truncate } from 'lodash';

@Pipe({ name: 'truncateString' })
export class TruncateStringPipe implements PipeTransform {
  transform(
    value: string,
    size: number,
    endOfTheString: string = '...'
  ): string {
    return truncate(value, {
      omission: endOfTheString,
      length: size
    });
  }
}
