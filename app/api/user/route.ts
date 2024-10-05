import { PrismaClient } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";
const client = new PrismaClient();

export function GET(req:NextRequest){
    return NextResponse.json({
        email:"Shubhasheeshkundu02@gmail.com",
        name:"Shubhasheesh Kundu"
    })
}


// 
export async function POST(req:NextRequest){
    // body
    const body = await req.json();
    await client.user.create({
        data:{
            email:body.username,
            password:body.password
        }
    })

    // // headers
    // console.log(req.headers.get("authorization"));

    // // query parameters
    // console.log(req.nextUrl.searchParams.get("name"));
    
    
    return NextResponse.json({
        body
    })
}