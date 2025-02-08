import express from "express";
import {
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent,
    deleteStudents,
    createStudent,
} from "../controller/student.controller";

const router = express.Router();

// router.get("/info", getInfo);

router
    .route("/")
    .get(getStudents)
    .post(createStudent)
    .delete(deleteStudents);

router
    .route("/:id")
    .get(getStudent)
    .put(updateStudent)
    .delete(deleteStudent);

export default router;
