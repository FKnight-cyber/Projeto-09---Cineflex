import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Chair from "./Chair";
import axios from "axios";

export default function Chairs(){
    const { idSection } = useParams();
    const [data,setData] = useState(false);
    const [cpf,setCpf] = useState();
    const [client,setClient] = useState();
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`);

        promise.then((response)=>{
            setData(response.data)
        });
    },[]);


    const getCpf = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if(value.length <= 11){
        setCpf(value);
    }
    };

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
            <div className="inputBox">
                <label>Nome do comprador:</label>
                <input type="text" value={client} placeholder="Informe seu nome..." onChange={e=>setClient(e.target.value)} />
                <label>CPF do comprador:</label>
                <input type="text" value={cpf} placeholder="Informe seu cpf..."  onChange={getCpf} />
            </div>
            <div className="button">
                <button>Reservar assento(s)</button>
            </div>
        </content>
        <div className="espaçofooter"></div>
        <footer>
            <div className="footerImgBox">
                <img src={data.movie.posterURL} alt="" />
            </div>
            <div className="footerTitle">
                <h4>{data.movie.title}</h4>
                <h4>{`${data.day.weekday} - ${data.day.date}`}</h4>
            </div>
        </footer>
        </>
    );
}