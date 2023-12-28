import { connectDb } from "@/lib/db/connectDb";
import { Users, UsersModel } from "@/lib/models/users";
import { NextResponse } from "next/server";

export interface loginFormDataType {
    email: string,
    pass: string
}

export interface loginFormResponseType {
    success: boolean,
    error?: string,
    user?: Users,
}

export async function POST(request: Request) {

    try {
        await connectDb();
        const body: loginFormDataType = await request.json();
        const user: Users | null = await UsersModel.findOne(body, { pass: 0 });
        if (user) {
            return NextResponse.json<loginFormResponseType>({ success: true, user });
        } else {
            return NextResponse.json<loginFormResponseType>({ success: false, error: "Invalid Username Or Password" });
        }
    } catch (error) {
        return NextResponse.json<loginFormResponseType>({ success: false, error: "Invalid Username Or Password" });

    }

}