import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customdate'
})
export class CustomdatePipe implements PipeTransform {

  transform(value: Date): string {
    if (!(value instanceof Date) || isNaN(value.getTime())) {
      return '';
    }

    const day = value.getDate();
    const suffix = this.getOrdinalSuffix(day);
    const month = value.toLocaleString('default', { month: 'short' });
    const week = value.toLocaleString('default', { weekday: 'short' });
    return `${day}${suffix} ${month}, ${week}`;
  }

  private getOrdinalSuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}
