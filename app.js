const express = require("express");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

const PORT = 3000;


// Middleware
app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to QuickTask API 🚀",
        version: "1.0.0"
    });
});


// Task API routes
app.use("/api/tasks", taskRoutes);


// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});


// Start server
app.listen(PORT, () => {
    console.log(
        `🚀 QuickTask API running at http://localhost:${PORT}`
    );
});