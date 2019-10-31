import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {
  private k = 1024;
  private sizes = ['Bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'];

  transform(bytes: number, decimals = 2) {
    if (bytes === 0) return `0 ${this.sizes[0]}`;
    const dm = decimals < 0 ? 0 : decimals;
    const i = Math.floor(Math.log(bytes) / Math.log(this.k));
    return parseFloat((bytes / Math.pow(this.k, i)).toFixed(dm)) + ' ' + this.sizes[i];
  }
}
