import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface describing the structure of a BlogPost document
interface ContactData extends Document {
    name: string;
    email: string;
    phone: string;
    message: string;
    createdAt?: Date;
}

const contactSchema: Schema<ContactData> = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const ConatctModel: Model<ContactData> = mongoose.models.contacts || mongoose.model<ContactData>('contacts', contactSchema);

export { ConatctModel }; export type { ContactData };