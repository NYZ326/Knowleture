import { Enrollment } from './enrollment';
import { Assignment } from './assignment';

export class Course {
    courseId: number;
    title: string;
    subject: string;
    code: string;
    term: string;
    fullTerm: string;
    credit: number;
    departmentId: number;
    enrollments: Array<Enrollment>;
    assignments: Array<Assignment>;
}