const sequelize = require('../config/database');
// const User = require('./User');
// const Meeting = require('./Meeting');
// const MeetingParticipant = require('./MeetingParticipant');
// const Transcription = require('./Transcription');
// const ActionItem = require('./ActionItem');
// const MeetingAnalytics = require('./MeetingAnalytics');

// Define associations
// User - Meeting relationships
// User.hasMany(Meeting, { 
//     foreignKey: 'created_by', 
//     as: 'createdMeetings' 
// });
// Meeting.belongsTo(User, { 
//     foreignKey: 'created_by', 
//     as: 'creator' 
// });

// // Meeting - Participants (Many-to-Many)
// User.belongsToMany(Meeting, { 
//     through: MeetingParticipant,
//     foreignKey: 'user_id',
//     as: 'participatedMeetings'
// });
// Meeting.belongsToMany(User, { 
//     through: MeetingParticipant,
//     foreignKey: 'meeting_id',
//     as: 'participants'
// });

// // Meeting - Transcriptions (One-to-Many)
// Meeting.hasMany(Transcription, { 
//     foreignKey: 'meeting_id', 
//     as: 'transcriptions' 
// });
// Transcription.belongsTo(Meeting, { 
//     foreignKey: 'meeting_id' 
// });

// // Meeting - Action Items (One-to-Many)
// Meeting.hasMany(ActionItem, { 
//     foreignKey: 'meeting_id', 
//     as: 'actionItems' 
// });
// ActionItem.belongsTo(Meeting, { 
//     foreignKey: 'meeting_id' 
// });

// // User - Action Items (One-to-Many)
// User.hasMany(ActionItem, { 
//     foreignKey: 'assigned_to', 
//     as: 'assignedTasks' 
// });
// ActionItem.belongsTo(User, { 
//     foreignKey: 'assigned_to', 
//     as: 'assignee' 
// });

// // Meeting - Analytics (One-to-One)
// Meeting.hasOne(MeetingAnalytics, { 
//     foreignKey: 'meeting_id', 
//     as: 'analytics' 
// });
// MeetingAnalytics.belongsTo(Meeting, { 
//     foreignKey: 'meeting_id' 
// });

module.exports = {
    sequelize,
    // User,
    // Meeting,
    // MeetingParticipant,
    // Transcription,
    // ActionItem,
    // MeetingAnalytics
};
