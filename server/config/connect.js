import { MongoMemoryServer } from 'mongodb-memory-server';
import { connect } from 'mongoose';

export const connectDB = async () => {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  const db = await connect(uri);
  console.log(`MongoDB connected`.bgMagenta);
  return db;
};
