import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Chairs";
import { requestData } from "./Chairs";
import ReservedChairs from "./ReservedChairs";
import Compradores from "./Compradores";

export default function LastPage(){

    const {
        title,
        weekday,
        date
    } = requestData;

    return(
        <>
            <header>
                <Topo>Pedido feito com sucesso</Topo>
            </header>
            <content>
                <SectionInfo>
                    <h1>Filme e sessão</h1>
                    <h4>{title}</h4>
                    <h4>{weekday} {date}</h4>
                </SectionInfo>
                <SectionInfo>
                    <h1>Ingressos</h1>
                    <ReservedChairs />
                </SectionInfo>
                <SectionInfo>
                    <h1>Comprador</h1>
                    <Compradores />
                </SectionInfo>
                <Link to={'/'} style={{ textDecoration: 'none' }} >
                <Button>
                    <button>Voltar pra home</button>
                </Button>
                </Link>
            </content>
        </>
    );
}

const Topo = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 110px;
background-color: #ffffff;
color: #247A6B;
font-size: 24px;
`;

const SectionInfo = styled.div`
margin-left: 24px;
margin-bottom: 40px;

    h1{
        color: #293845;
        font-weight: bolder;
        font-size: 24px;
        margin-bottom:8px;
    }

    h4{
        font-size:22px;
        color:#293845;
        margin-bottom:4px;
    }
`