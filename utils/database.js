import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log('Connected to Mongoose! :-)')
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "shareprompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;

        console.log('Connected to Mongoose! :-)')
    } catch (error) {
        console.log(error)
    }
};