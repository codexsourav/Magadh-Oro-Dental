import { NextResponse } from "next/server";
import { BlogPost, BlogPostModel } from "@/lib/models/blogposts";
import { connectDb } from "@/lib/db/connectDb";

export async function POST(request: Request) {
    try {
        await connectDb();
        const postData: BlogPost = await request.json();
        const newPost = new BlogPostModel(postData);
        await newPost.save();
        return NextResponse.json({ success: true });
    } catch (error: any) {
        let errorMessage = 'An error occurred while processing the request.';

        if (error instanceof Error && error.name === 'ValidationError') {
            errorMessage = 'Validation error. Please check your data.';
        } else if (error instanceof Error && error.name === 'MongoError') {
            errorMessage = 'MongoDB error occurred.';
        }
        console.error('Error:', error);
        return NextResponse.json({ success: false, error: errorMessage });
    }
}


export async function GET(request: Request) {
    try {
        await connectDb();
        const recentPosts: BlogPost[] = await BlogPostModel
            .find({})
            .sort({ createdAt: -1 });
        return NextResponse.json(recentPosts);
    } catch (error: any) {
        console.error('Error:', error);
        return NextResponse.json([]);
    }
}
