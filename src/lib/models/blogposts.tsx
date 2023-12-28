import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface describing the structure of a BlogPost document
interface BlogPost extends Document {
    title: string;
    content: string;
    image: string;
    desc: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface BlogType {
    title: string;
    content: string;
    image: string;
    desc: string;
}

// Schema definition for the BlogPost
const blogPostSchema: Schema<BlogPost> = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Define model for BlogPost
const BlogPostModel: Model<BlogPost> = mongoose.models.blogpost || mongoose.model<BlogPost>('blogpost', blogPostSchema);

export { BlogPostModel }; export type { BlogPost };

