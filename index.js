// Import the Express library
import express from 'express';

// Initialize the Express application
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Define a single API endpoint
app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'Hello, this is your API response!',
        status: 'success'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
