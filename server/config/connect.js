import { connect } from 'mongoose';

export const mongoConnect = async () => {
  try {
    connect(process.env.MONGO_STRING);
    console.log('MongoDB connected'.bgCyan);
  } catch (error) {
    console.log(error);
  }
};
