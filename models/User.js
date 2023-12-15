// models/User.js
const connectToDatabase = require('../db');

async function createUser(user) {
  const db = await connectToDatabase();
  const users = db.collection('users');

  try {
    const result = await users.insertOne(user);
    console.log(`User inserted with ID ${result.insertedId}`);
  } catch (error) {
    console.error('Error inserting user', error);
    throw error;
  }
}

module.exports = createUser;
