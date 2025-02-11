import { IStudent } from "../api/v1/models/student.model";

export interface IStudentRepository {
    getStudents(): Promise<IStudent[]>;
    getStudent(id: string): Promise<IStudent | null>;
    createStudent(studentData: Partial<IStudent>): Promise<IStudent>;
    updateStudent(
        id: string,
        studentData: Partial<IStudent>
    ): Promise<IStudent | null>;
    deleteStudent(id: string): Promise<IStudent | null>;
}
