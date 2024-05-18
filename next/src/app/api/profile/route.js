import { NextResponse } from "next/server";
import { headers } from 'next/headers'
import axios from "axios";


export async function GET(){
    // const {token} = await request.json();
    const token = headers().get('authorization')
    console.log(token, "!!!!!!!!!!!!!!!!!!!!!!")

    const response = await axios.get('http://localhost:9090/api/profile', 
    {
        withCredentials: false,
        headers: {
            'authorization': token
        }
    })

    console.log(response)

    if (response.status === 200){
        return NextResponse.json(response.data)
    } 
    else{
        return NextResponse.json({}, {status:401})
    }
}