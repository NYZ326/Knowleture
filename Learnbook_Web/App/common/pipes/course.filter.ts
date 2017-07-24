import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterCourse'
})
export class filterCoursePipe implements PipeTransform {
    transform(items: Array<any>, term: string): Array<any> {
        if (items != undefined || items != null) {
            if (term == 'All') {
                return items;
            }
            else {
                return items.filter(item => item.Course.FullTerm === term);
            }
        }
    }
}