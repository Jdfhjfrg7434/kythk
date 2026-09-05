// config.js - ESM Version
import dotenv from 'dotenv';
dotenv.config();

const config = {
    // MongoDB Configuration (only this is from process.env)
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://drkamran1871_db_user:Dtslcg7owxFWplMe@cluster0.3i7nncp.mongodb.net/?appName=Cluster0',
    
    // Fixed Database Name
    DB_NAME: process.env.DB_NAME || 'drkamran',
    
    // Collections Configuration
    COLLECTIONS: {
        SESSIONS: 'whatsapp_sessions',
        NUMBERS: 'active_numbers',
        CONFIGS: 'bot_configs'
    },
    
    // Plugin Repository URL
    PLUGIN_REPO_URL: 'https://github.com/GWHFFNBF/Ufbbdh/archive/refs/heads/main.zip',
    
    // Status React Emojis
    STATUS_REACT_EMOJIS: ['💗', '🎀', '🫠', '🫶', '🌚', '💐'],
    
    // Channel React Emojis
    CHANNEL_REACT_EMOJIS: ['🚩', '🌚', '😩', '🫶', '😊', '😎', '🫠', '☠️', '💀', '👑', '🎀'],
    
    // Bot Configuration
    AUTO_VIEW_STATUS: 'true',
    AUTO_LIKE_STATUS: 'true',
    MENTION_REPLY: 'true',
    AUTO_RECORDING: 'false',
    AUTO_REACT: 'false',
    AUTO_TYPING: 'false',
    ALWAYS_ONLINE: 'false',
    VERSION: '3.0.0 Bᴇᴛᴀ',
    DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ DOCTOR-MD🚩*',
    ANTI_DELETE_PATH: 'inbox',
    ANTI_DELETE: 'false',
    ANTI_EDIT_PATH: 'inbox',
    ANTI_EDIT: 'false',
    STICKER_NAME: 'DOCTOR-MD',
    ANTI_LINK: 'warn',
    ANTI_STATUS: 'true',
    WELCOME: 'false',
    GOODBYE: 'false',
    WELCOME_MESSAGE: '*_@user joined the group, welcome! 🎉_*',
    GOODBYE_MESSAGE: '*_@user has left the group, we will miss them! 👋_*',
    ADMIN_ACTION: 'false',
    MODE: 'public',
    PREFIX: '.',
    ANTI_CALL: 'false',
    REJECT_MSG: '*Call Rejected Automatically 📵*',
    READ_MESSAGE: 'false',
    AUTO_STATUS_SEEN: 'true',
    OWNER_REACT: 'false',
    OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],
    REACT_EMOJIS: ['🌈', '🕊️', '🌚', '🦢', '🎀', '💗', '🌺', '🌝', '🦋', '💐', '👀', '🍂', '🫶', '🤌', '💕', '🫠', '🫀', '🫰', '🪽', '🪐'], 
    LIKE_EMOJIS: ['❤️', '👍', '😮', '😎', '💀'],
    
    // Bot Identity
    BOT_NAME: 'DOCTOR-MD',
    OWNER_NAME: 'DOCTOR-MD',
    OWNER_NUMBER: '923195068309',
    DEV: '923195068309',
    IK_IMAGE_PATH: './lib/doctormd.jpg',
    BOT_IMAGE: 'https://i.ibb.co/84NpJd5V/1787977996211.png',
    
    // Newsletter Configuration
    NEWSLETTER_JID: '120363426641229472@newsletter',
    NEWSLETTER_MESSAGE_ID: '428',  
    
    // System Configuration
    MAX_RETRIES: 3,
    OTP_EXPIRY: 300000,
    ADMIN_LIST_PATH: './admin.json',
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029VbCyMaCLikg1QxaEQR10',
    BANNED: [],
    SUDO: ["432335166283@lid", "1786628280156@lid", "923195068309@s.whatsapp.net", "923196891871@s.whatsapp.net", "923110741871@s.whatsapp.net", "923036338918@s.whatsapp.net", "923298605468@s.whatsapp.net", "923147168309@s.whatsapp.net"],
    
    // Default Settings Template
    DEFAULT_SETTINGS: {
        // Status & View Settings
        AUTO_VIEW_STATUS: 'true',
        AUTO_LIKE_STATUS: 'true',
        MENTION_REPLY: 'true',
        AUTO_STATUS_SEEN: 'true',
        READ_MESSAGE: 'false',
        
        // Auto Actions
        AUTO_RECORDING: 'false',
        AUTO_REACT: 'false',
        AUTO_TYPING: 'false',
        ALWAYS_ONLINE: 'false',
        OWNER_REACT: 'false',
        
        // Anti Features
        ANTI_DELETE: 'false',
        ANTI_DELETE_PATH: 'inbox',
        ANTI_EDIT: 'false',
        ANTI_EDIT_PATH: 'inbox',
        ANTI_CALL: 'false',
        ANTI_LINK: 'warn',
        ANTI_STATUS: 'true',
        
        // Group Events
        WELCOME: 'false',
        GOODBYE: 'false',
        ADMIN_ACTION: 'false',
        
        // Message Templates
        WELCOME_MESSAGE: '*_@user joined the group, welcome! 🎉_*',
        GOODBYE_MESSAGE: '*_@user has left the group, we will miss them! 👋_*',
        REJECT_MSG: '*Call Rejected Automatically 📵*',
        
        // Bot Identity
        VERSION: '9.0.0 Bᴇᴛᴀ',
        OWNER_NAME: 'DOCTOR-MD',
        OWNER_NUMBER: '923195068309',
        DEV: '923195068309',
        DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ DOCTOR-MD*',
        STICKER_NAME: 'DOCTOR-MD',
        MODE: 'public',
        PREFIX: '.',
        BOT_NAME: 'DOCTOR-MD',
        BOT_IMAGE: 'https://i.ibb.co/84NpJd5V/1787977996211.png',
        
        // Emoji Lists
        STATUS_REACT_EMOJIS: ['💗', '🎀', '🫠', '🫶', '🌚', '💐'],
        CHANNEL_REACT_EMOJIS: ['🚩', '🌚', '😩', '🫶', '😊', '😎', '🫠', '☠️', '💀', '👑', '🎀'],
        REACT_EMOJIS: ['🌈', '🕊️', '🌚', '🦢', '🎀', '💗', '🌺', '🌝', '🦋', '💐', '👀', '🍂', '🫶', '🤌', '💕', '🫠', '🫀', '🫰', '🪽', '🪐'],
        OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],
        LIKE_EMOJIS: ['❤️', '👍', '😮', '😎', '💀'],
        
        // Lists
        BANNED: [],
        SUDO: ["43233166283@lid", "1786628380156@lid", "923195068309@s.whatsapp.net", "923298605468@s.whatsapp.net", "923196891871@s.whatsapp.net", "923036338918@s.whatsapp.net", "923110741871@s.whatsapp.net", "923147168309@s.whatsapp.net"]
    }
};

export default config;
