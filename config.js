const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nFOQiCiFVTtSAi4IjiBRm3zgOSAOEuBASn/O9bjDN15mHP2dm3VCCdTnd//QayHFdoiTowfQNFiRuXoH5JugKBKZBr30clGADoEhdMwVWtWosv6ejsRCRyJlonvUDCUnLAKCu72Ox1b2JUglIvXp/BfQCK+pxg7w+ARwbGL6LjKAqzz9YxK8hjXaWZZBd4J3zxZwxLX0ykUTbDPYN7j+jiEmfBvAhRiko3WaJu4+Lye/Rd1VlM5mJJVVjUtN2wvdRsfJMWpcRGxabo9k2yhOvNZT2Kv0d/GChcKEBG3qkvnlf7uB1fPKHe7u3DEeF858BzY0VwfwzyB/0KBxmCOkQZwaT7tu6TBYya3W3MGhZf0ZQ78ozGyuen7RimlwlFISrR1y+vqv1d3UfC7ixdVlSdz9BFUuKNupqXAaWOFEUOipanqai5snmo4eAr8U35mZX4/+i+1r1hXmJrXpLOuI7Fcbq4GZJnmSEUJik8WFDWRDg8b9XV9+gvlxP97C0PxyITPCk5muZtESvXlp+ndJO6nNqtPRphXmsPv+i7pC7/xNIuBTOtJXFGJXS9L0hmhWPiXUbCYU+KfKfvDkpGdXNa9p0rPDqpzUuykb5K4ubQUTuoGrK8kbxdG9nu8EaG9OhGG4H0/P6iGHU6BFPmPgAlCnBFSpfgPOv3RG4AXNjskFci8q4ukJjX9vVFocu4bTZGFysTBcWOsuALfLwt18tD2DKZyOnzof4MBqAocw9VFYIarkheditUVW6AKjD9++cAZKglD9/620bMAPi4rMghq4skd+GnqZ8fXc/L64zsusyb9QtUgunw1zYiBGdB1ctYZ27phbhBs9AlFZj6blKh+wBA1GAP9XjgxdtGxVkPLAP5pmTbEWRZTeoph3n2+GWEeJ8Rh/4Tz0H4xCEEn0RXHD/5HMP5DMOyLOOBAcAfI9Of+f18j0/VcStw0HGtlReZN2TyIq9tz5f83YWH9KhEEExJWaMBOLteXBf7PEbZH3DbWdq9XJN8w25Gy2W5vXmz6LoUA1QMv+A+LAXTt181Ncthj8crzlazVyYYgPQ9gbh/uciOOEZkeHEsDKfi6K/qx7UX0i2KHxkiPe6H6P0JiIiLkwpMwcxkNeq0kud6xt0EbrGQgkCaBb2qnyZ9hv2RpiIcWeFxoyIuPWXY2s/5k6anc7V1VO6sCU6Dk4OQapkwHz7/C0hfPxv7RuLY4kJactCrF5eYHno2szV3bDO2mo6xfLteUzZdocC9xNe9OVtckhvcm8eJKriccmro4zohDa34RbSRsqyeWc/9bY+wfL3stAiO80POhayk24loj5Qu5meuzGiOMVuZpywKl1vDLpTl7jiK+Ln6wpiFqkYng40MSjWdo9xxkt3eAv12IqY8SaMzvj7G8L0Gko/6xe8T8vYRLR+j9zbL3N6i/zLna8qH98EXjI9+/E2SZPcVDnU7ap3aSE9cPG/Xx21nhLJnt2jRUozAFfaaD3mqNcH9/nMAisQlfl6mfbwzWOYYggFI3IpIvwZ1j1NUETctwJQROEbk+Ikwuf8DAKrp5N0HAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "MUHAMMAD ASWAD",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "923419159670",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'recording',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

