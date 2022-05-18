import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Chair from "./Chair";
import axios from "axios";

export default function Chairs(){
    const { idSection } = useParams();
    const [data,setData] = useState(false);
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`);

        promise.then((response)=>{
            setData(response.data)
        })
    },[])

    if(!data){
        return ''
    }
    
    return(
        <>
        <header>
            <div className="sub-topo">Selecione o(s) assento(s)</div>
        </header>
        <content>
            <div className="seats">
                <Chair chairInfo={data} />
            </div>
        </content>
        <div className="statusBar">
            <div className="subBar">
                <div className="seat selected" style={{ cursor: 'default' }}></div>
                <h2>Selecionado</h2>
            </div>
            <div className="subBar">
                <div className="seat" style={{ cursor: 'default' }}></div>
                <h2>Disponível</h2>
            </div>
            <div className="subBar">
                <div className="seat indisponivel" style={{ cursor: 'default' }}></div>
                <h2>Indisponível</h2>
            </div>
        </div>
        </>
    );
}