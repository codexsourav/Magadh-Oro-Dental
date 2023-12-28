import { BlogPost, BlogPostModel } from "@/lib/models/blogposts";
import { ConatctModel, ContactData } from "@/lib/models/contacts";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

    try {

        const blog: BlogPost[] = await BlogPostModel.find({}).sort({ createdAt: -1 });
        const contacts: ContactData[] = await ConatctModel.find({}).sort({ createdAt: -1 });

        return NextResponse.json({ blog, contacts });
    } catch (error) {
        return NextResponse.json({ blog: [], contacts: [] });
    }

}