import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface describing the structure of a BlogPost document
interface Users extends Document {
    name: string;
    email: string;
    pass: string;
    createdAt?: Date;
}

const usersSchema: Schema<Users> = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const UsersModel: Model<Users> = mongoose.models.users || mongoose.model<Users>('users', usersSchema);

export { UsersModel }; export type { Users };