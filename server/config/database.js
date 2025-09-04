const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        dialect: 'mysql',
        
        // Connection Pool Configuration
        pool: {
            max: 10,        // Maximum connections
            min: 0,         // Minimum connections
            acquire: 30000, // Maximum time to get connection (ms)
            idle: 10000     // Maximum idle time (ms)
        },
        
        // Logging (disable in production)
        logging: process.env.NODE_ENV === 'development' ? console.log : false,
        
        // Additional options
        define: {
            timestamps: true,           // Adds createdAt and updatedAt
            underscored: true,         // Use snake_case instead of camelCase
            freezeTableName: true,     // Don't pluralize table names
        },
        
        // Timezone
        timezone: '+05:30', // IST timezone
    }
);

module.exports = sequelize;
