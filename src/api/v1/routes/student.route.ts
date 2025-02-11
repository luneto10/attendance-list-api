import { Router } from "express";
import { StudentController } from "../controllers/student.controller";

const router = Router();
const studentController = new StudentController();

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student management
 */

/**
 * @swagger
 * /api/v1/students:
 *   get:
 *     summary: Retrieve a list of students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: A list of students.
 */
router.get("/", (req, res) => studentController.getStudents(req, res));

/**
 * @swagger
 * /api/v1/students:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       description: Student object that needs to be added.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       201:
 *         description: Student created successfully.
 */
router.post("/", (req, res) => studentController.createStudent(req, res));

/**
 * @swagger
 * /api/v1/students/{id}:
 *   get:
 *     summary: Get a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The student ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The student data.
 *       404:
 *         description: Student not found.
 */
router.get("/:id", (req, res) => studentController.getStudent(req, res));

/**
 * @swagger
 * /api/v1/students/{id}:
 *   put:
 *     summary: Update a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The student ID.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated student information.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: The updated student data.
 *       404:
 *         description: Student not found.
 */
router.put("/:id", (req, res) => studentController.updateStudent(req, res));

/**
 * @swagger
 * /api/v1/students/{id}:
 *   delete:
 *     summary: Delete a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The student ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The student was deleted successfully.
 *       404:
 *         description: Student not found.
 */
router.delete("/:id", (req, res) => studentController.deleteStudent(req, res));

export default router;
