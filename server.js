const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors')

const app = express();

//Connect to the Database
connectDB();

//init Middleware
app.use(
    express.json({
        extended: false
    })
);
app.use(cors({ credentials: true, origin: '*' }));
app.get("/", (req, res) =>
    res.json({
        msg: "Welcome to the contact keeper API"
    })
);

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});