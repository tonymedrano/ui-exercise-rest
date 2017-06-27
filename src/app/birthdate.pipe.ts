import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({name: 'date'})
export class BirthDatePipe implements PipeTransform {
    transform(value: string): any {
        let datePipe = new DatePipe("es-ES");
        value = datePipe.transform(value, 'dd/MM/yyyy');
        return value;
    }
}