import mongoose, { Schema, Document, Model } from "mongoose";

export interface IStudent extends Document {
    nuid: string;
    name: string;
    course: string;
    labTime: string;
    deviceId: string;
    ip: string;
}

const StudentSchema: Schema = new Schema(
    {
        nuid: { type: String, required: true },
        name: { type: String, required: true },
        course: { type: String, required: true },
        labTime: { type: String, required: true },
        deviceId: { type: String, required: true },
        ip: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export const Student: Model<IStudent> =
    mongoose.models.Student ||
    mongoose.model<IStudent>("Student", StudentSchema);
