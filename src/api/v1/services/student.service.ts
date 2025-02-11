import { IStudentRepository } from "../../../interfaces/IStudentRepository";
import { IStudent } from "../models/student.model";

export class StudentService {
    constructor(private studentRepository: IStudentRepository) {}

    async getStudents(): Promise<IStudent[]> {
        return this.studentRepository.getStudents();
    }

    async getStudent(id: string): Promise<IStudent | null> {
        return this.studentRepository.getStudent(id);
    }

    async createStudent(studentData: Partial<IStudent>): Promise<IStudent> {
        return this.studentRepository.createStudent(studentData);
    }

    async updateStudent(
        id: string,
        studentData: Partial<IStudent>
    ): Promise<IStudent | null> {
        return this.studentRepository.updateStudent(id, studentData);
    }

    async deleteStudent(id: string): Promise<IStudent | null> {
        return this.studentRepository.deleteStudent(id);
    }
}
