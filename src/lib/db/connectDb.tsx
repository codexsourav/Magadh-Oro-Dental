import mongoose, { Mongoose } from 'mongoose';

export const connectDb = async (): Promise<Mongoose> => {
    try {

        const database: Mongoose = await mongoose.connect("mongodb+srv://bidandshops:sourav404@bidandshops.7o4snti.mongodb.net/dental");

        console.log('Connected to the database successfully!');
        // You can return the database object or perform any other operations here
        return database;
    } catch (error: any) {
        console.error('Error connecting to the database:', error.message);
        // Handle the error, throw it, or perform any other actions needed
        throw error;
    }
};