import { NextResponse } from "next/server";
import axios from "axios";


export async function POST(request){

    const {login, password} = await request.json();

    if (login != "" & password != ""){
        const response = await axios.post('http://localhost:9090/api/registration', 
        {login, password}, {
            withCredentials: false,
        })

        
        console.log(response)


        if (response.status === 200){
            return NextResponse.json(response.data)
        } 
        else{
            return NextResponse.json({}, {status:401})
        }
    }
    else{
        return NextResponse.json({}, {status: 401})
    }


    
}