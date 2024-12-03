import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/utils/mongoose";
import User from "@/models/user.model";

export async function POST(req: NextRequest) {
    try {
        await ConnectDB();
        const basicData: FormData = await req.formData();
        const name = basicData.get('name');
        let username = basicData.get('username');
        const email = basicData.get('email');
        const profileImage = basicData.get('profileImage');
        const about = basicData.get('about')
        const socialLinks = basicData.get('socialLinks');
        const interest = basicData.get('interest');
        const password = basicData.get('password');
        const interestAreas = interest ? String(interest).trim().split(',') : [];
    
        const isUserExist = await User.findOne({$or: [{email}, {username}]});
        if(isUserExist) return NextResponse.json({message: "Provided Email or Username already Exists"}, {status: 400})
    
        const userData = await new User({
            name, username, email, profileImage, about, socialLinks, interestAreas, password
        }).save();
        if(!userData) return NextResponse.json({message: "Failed to register! Try Again"}, {status: 400})
        return NextResponse.json({message: "Congrats! You are registered Successfully!"})
        
    } catch (error: unknown) {
        return NextResponse.json({message: "Registration Failed! Try Again"}, {status: 500})
    }
}

export async function PUT(req: NextRequest){
    try {
        await ConnectDB();
        const basicData: FormData = await req.formData();
        const id = basicData.get('_id');
        const name = basicData.get('name');
        let username = basicData.get('username');
        const email = basicData.get('email');
        const profileImage = basicData.get('profileImage');
        const about = basicData.get('about')
        const socialLinks = basicData.get('socialLinks');
        const interest = basicData.get('interest');
        const password = basicData.get('password');
        const interestAreas = interest ? String(interest).trim().split(',') : [];
    
        const isUserExist = await User.findById(id);
        if(!isUserExist) return NextResponse.json({message: "User does not exist!"}, {status: 400})
    
        const userData = await new User({
            name, username, email, profileImage, about, socialLinks, interestAreas, password
        }).save();
        if(!userData) return NextResponse.json({message: "Failed to register! Try Again"}, {status: 400})
        return NextResponse.json({message: "Congrats! You are registered Successfully!"})
        
    } catch (error: unknown) {
        return NextResponse.json({message: "Registration Failed! Try Again"}, {status: 500})
    }
}