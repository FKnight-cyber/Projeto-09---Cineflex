import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from 'react-loading';
import React from "react";
import axios from "axios";
import Section from "./Section";

const Example = ({ type, color }) => (
	<ReactLoading type={type} color={color} height={667} width={375} />
);

export default function Sections(){
    const { idFilme } = useParams();
    const [data,setData] = useState(false);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then((response) => {
            setData(response.data);
        });
    },[data.length,idFilme]);

    if(!data){
        return <Example />;
    }

    return(
        <>
            <header>
                <div className="sub-topo">Selecione o horário</div>
            </header>
            <content>
                <Section sectionInfo={data} />
            </content>
            <div className="espaçofooter"></div>
            <footer>
                <div className="footerImgBox">
                    <img src={data.posterURL} alt="" srcset="" />
                </div>
                <div className="footerTitle">
                    <h4>{data.title}</h4>
                </div>
            </footer>
        </>
    );
}