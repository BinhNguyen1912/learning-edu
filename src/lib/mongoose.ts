import envConfig from '@/config';
import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async (): Promise<void> => {
  if (isConnected) return;

  if (!envConfig.MONGODB_URL) throw new Error('MONGODB_URI not found');

  try {
    await mongoose.connect(envConfig.MONGODB_URL, {
      dbName: 'Ucademy',
    });

    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};
