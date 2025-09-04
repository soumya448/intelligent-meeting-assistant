require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');

const app = express();

// Middleware
app.use(express.json());

// Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/meetings', require('./routes/meetings'));

// Database connection and sync
const startServer = async () => {
    try {
        // Test database connection
        await sequelize.authenticate();
        console.log('✅ Database connection established successfully');
        
        // Sync models (creates tables if they don't exist)
        await sequelize.sync({ 
            force: false,  // Set to true to drop and recreate tables
            alter: true    // Update existing tables to match models
        });
        console.log('✅ Database models synchronized');
        
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('❌ Unable to connect to database:', error);
        process.exit(1);
    }
};

startServer();
