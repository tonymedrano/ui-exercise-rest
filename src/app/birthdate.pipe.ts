import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({name: 'date'})
export class BirthDatePipe implements PipeTransform {
    transform(value: string): any {
        var datePipe = new DatePipe("es");
        value = datePipe.transform(value, 'yMMMMEEEEd');
        return value;
    }
}