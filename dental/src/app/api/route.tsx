import { NextResponse } from "next/server";
import mail, { mailTypes } from '@/helper/nodemailer';

export async function POST(request: Request) {
    try {
        const data: mailTypes = await request.json();
        const sendMail = await mail(data);
        return NextResponse.json({ success: true, data: sendMail });
    } catch (error) {
        return NextResponse.json({ success: false });
    }
}