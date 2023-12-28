import { NextResponse } from "next/server";
import { NextRouter, useRouter } from 'next/router'
import type { NextApiRequest, NextApiResponse } from 'next';
import { BlogPost, BlogPostModel } from "@/lib/models/blogposts";
import { connectDb } from "@/lib/db/connectDb";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectDb();
        const deletePost = await BlogPostModel.deleteOne({ _id: params.id });
        return NextResponse.json({ success: true, deletePost });
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


export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectDb();
        const postData: BlogPost = await request.json();
        const updatePost = await BlogPostModel.updateOne({ _id: params.id }, { $set: postData });
        return NextResponse.json({ success: true, updatePost });
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
