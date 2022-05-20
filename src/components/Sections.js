import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import Section from "./Section";
import Loading from "./Loading";
import styled from "styled-components";

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
        return <Loading />;
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
                    <img src={data.posterURL} alt="" />
                </div>
                <FooterTitle>
                    <h4>{data.title}</h4>
                </FooterTitle>
            </footer>
        </>
    );
}

export let FooterTitle = styled.div`
    flex-wrap: wrap;
    height: 40px;
    font-size: 26px;
    color: #293845;
`