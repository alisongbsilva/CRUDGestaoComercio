import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj',
  standalone: false
})
export class CnpjPipe implements PipeTransform {
  transform(value: string | number): string {
    if (!value) return '';

    const cnpj = value.toString().padStart(14, '0').replace(/\D/g, '');

    if (cnpj.length !== 14) return value.toString();

    return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12, 14)}`;
  }
}