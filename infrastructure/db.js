import mongoose from "mongoose";

const serverNmae = process.env.DB_SERVER_NAME || mongodb;
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_NAME;

mongoose.connect(`${serverNmae}://localhost:${dbPort}/${dbName}`)
    .then(() => console.log('Connected to the database successfully.'))
    .catch((error) => console.error('Connection error:', error));

export const db = mongoose;