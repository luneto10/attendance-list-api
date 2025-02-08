import express from "express";
import {
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent,
    deleteStudents,
    createStudent,
} from "../controller/student";

const router = express.Router();

router.post("/", createStudent);

// router.get("/info", getInfo);

router.get("/", getStudents);

router.get("/:id", getStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

router.delete("/", deleteStudents);

export default router;
