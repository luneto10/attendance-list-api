require("dotenv").config();
import app from "./app";
import swaggerDocs from "./api/v1/utils/swagger";
import connect from "./configs/mongodb.config";

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);

    await connect();

    swaggerDocs(app, port);
});
