import app from "./app";
import { MongoDBConnector } from "./config/mongodb.config";

const port = process.env.PORT || 3000;
const dbConnector = new MongoDBConnector();

app.listen(port, async () => {
    console.log(`Server is running on port http://localhost:${port}`);
    try {
        await dbConnector.connect();
    } catch (error) {
        console.error(
            "Failed to start the server because the database connection failed."
        );
        process.exit(1);
    }
});
