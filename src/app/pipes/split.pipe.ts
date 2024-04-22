import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSplit',
  standalone: true,
})
export class SplitPipe implements PipeTransform {

  transform(value: string, separator: string = '\n'): string[] {
    return value.split(separator);
  }

}
