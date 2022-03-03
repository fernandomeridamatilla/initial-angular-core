import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'notInformed' })
export class NotInformedPipe implements PipeTransform {
  transform(
    value: string | number | null | undefined
  ): string | number | null | undefined {
    if (isInvalid(value)) {
      return 'No informado' as string;
    }

    return value;
  }
}

function isInvalid(value: string | number | null | undefined): boolean {
  return value === null || value === undefined || value === '';
}
