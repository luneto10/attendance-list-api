import { Request, Response } from "express";
import { StudentService } from "../services/student.service";
import { StudentRepository } from "../repositories/student.repository";

export class StudentController {
    private studentService: StudentService;

    constructor() {
        const studentRepository = new StudentRepository();
        this.studentService = new StudentService(studentRepository);
    }

    async getStudents(req: Request, res: Response): Promise<void> {
        try {
            const students = await this.studentService.getStudents();
            res.json(students);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async getStudent(req: Request, res: Response): Promise<void> {
        try {
            const student = await this.studentService.getStudent(req.params.id);
            if (!student) {
                res.status(404).json({ error: "Student not found" });
            } else {
                res.json(student);
            }
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async createStudent(req: Request, res: Response): Promise<void> {
        try {
            const student = await this.studentService.createStudent(req.body);
            res.status(201).json(student);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateStudent(req: Request, res: Response): Promise<void> {
        try {
            const student = await this.studentService.updateStudent(
                req.params.id,
                req.body
            );
            if (!student) {
                res.status(404).json({ error: "Student not found" });
            } else {
                res.json(student);
            }
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteStudent(req: Request, res: Response): Promise<void> {
        try {
            const student = await this.studentService.deleteStudent(
                req.params.id
            );
            if (!student) {
                res.status(404).json({ error: "Student not found" });
            } else {
                res.json(student);
            }
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
