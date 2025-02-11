import { Student, IStudent } from "../models/student.model";

export class StudentRepository {
    async getStudents(): Promise<IStudent[]> {
        return Student.find({});
    }

    async getStudent(id: string): Promise<IStudent | null> {
        return Student.findById(id);
    }

    async createStudent(studentData: Partial<IStudent>): Promise<IStudent> {
        const student = new Student(studentData);
        return student.save();
    }

    async updateStudent(
        id: string,
        studentData: Partial<IStudent>
    ): Promise<IStudent | null> {
        return Student.findByIdAndUpdate(id, studentData, { new: true });
    }

    async deleteStudent(id: string): Promise<IStudent | null> {
        return Student.findByIdAndDelete(id);
    }
}
