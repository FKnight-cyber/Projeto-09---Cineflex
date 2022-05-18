import { useState, useEffect } from 'react';
import Movies from "./Movies";
import axios from "axios";

export default function InitialPage(){
    const [images,setImages] = useState([{}])
    
    useEffect(()=>{
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then((response) => {
            setImages(response.data)
        });
    },[]);

    return(
        <>
            <header>
                <div className="sub-topo">Selecione o filme</div>
            </header>
            <content>
                <ul>
                   <Movies postImages={images} />
                </ul> 
            </content>  
        </>
    );
}