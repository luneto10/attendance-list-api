import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Express API Starter",
            version: "1.0.0",
            description:
                "API documentation for Express API Starter with TypeScript",
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`, // Change this to your server URL if needed
                description: "Development server",
            },
        ],
        components: {
            schemas: {
                Student: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        nuid: { type: "string" },
                        name: { type: "string" },
                        course: { type: "string" },
                        labTime: { type: "string" },
                        deviceId: { type: "string" },
                        ip: { type: "string" },
                    },
                    required: [
                        "nuid",
                        "name",
                        "course",
                        "labTime",
                        "deviceId",
                        "ip",
                    ],
                },
            },
        },
    },
    // Paths to files containing OpenAPI definitions (adjust the glob patterns as needed)
    apis: ["./src/api/v1/routes/*.ts", "./src/api/v1/controllers/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwaggerDocs = (app: Application): void => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerSpec;
