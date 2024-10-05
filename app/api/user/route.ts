import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest){
    return NextResponse.json({
        email:"Shubhasheeshkundu02@gmail.com",
        name:"Shubhasheesh Kundu"
    })
}

export async function POST(req:NextRequest){
    // body
    const body = await req.json();

    // // headers
    // console.log(req.headers.get("authorization"));

    // // query parameters
    // console.log(req.nextUrl.searchParams.get("name"));
    
    
    return NextResponse.json({
        body
    })
}