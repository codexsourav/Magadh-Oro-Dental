import { connectDb } from "@/lib/db/connectDb";
import { ConatctModel } from "@/lib/models/contacts";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectDb();
        const deleteConnect = await ConatctModel.deleteOne({ _id: params.id });
        return NextResponse.json({ success: true, deleteConnect });
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