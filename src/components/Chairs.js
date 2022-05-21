import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { browserHistory } from 'react-router'
import Chair from "./Chair";
import axios from "axios";
import styled from "styled-components";
import Loading from "./Loading";
import { Voltar } from "./Sections";

export let requestData = { }

export default function Chairs(){
    const navigate = useNavigate();

    const [clickedIndex, setClickedIndex] = useState([]);
    const { idSection } = useParams();
    const [data,setData] = useState(false);
    const [seatIDs,setSeatIDs] = useState([]);
    const [cpf,setCpf] = useState('');
    const [client,setClient] = useState('');

    const chairMethods = {
        clickedIndex,
        setClickedIndex,
        setSeatIDs,
        seatIDs
    }
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`);

        promise.then((response)=>{
            setData(response.data)
        });
    },[]);

    if(!data){
        return <Loading />;
    }

    requestData = {
        title: data.movie.title,
        weekday: data.day.weekday,
        date: data.day.date,
        name: client,
        cpf: cpf,
        seats: Object.keys(clickedIndex)
    }

    const getCpf = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        if(value.length <= 11){
            setCpf(value);
        }
    };

    function submitRequest(event){
        event.preventDefault();

        axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",{
            ids: seatIDs,
            name: client,
            cpf: cpf
        });

        navigate('/sucesso');
    }

    return(
        <>
        <Voltar onClick={() => navigate(-1)}>Voltar</Voltar> 
        <header>
            <div className="sub-topo">Selecione o(s) assento(s)</div>
        </header>
        <content>
            <div className="seats">
                <Chair chairInfo={data} chairMethods={chairMethods} />
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
            <form onSubmit={submitRequest}>
                <div className="inputBox">
                    <label>Nome do comprador:</label>
                    <input type="text" value={client} placeholder="Informe seu nome..." onChange={e=>setClient(e.target.value)} />
                    <label>CPF do comprador:</label>
                    <input type="text" value={cpf} placeholder="Informe seu cpf..."  onChange={getCpf} />
                </div>
                    <Button>
                        <button type="submit">Reservar assento(s)</button>
                    </Button>
            </form>
        </content>
        <div className="espaçofooter"></div>
        <footer>
            <div className="footerImgBox">
                <img src={data.movie.posterURL} alt="" />
            </div>
            <FooterTitle>
                <h4>{data.movie.title}</h4>
                <h4>{`${data.day.weekday} - ${data.day.date}`}</h4>
            </FooterTitle>
        </footer>
        </>
    );
}

export const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 56px;
margin-bottom: 30px;

    button{
        border: none;
        background-color: #E8833A;
        color: #ffffff;
        border-radius: 4px;
        width: 226px;
        height: 42px;
    }
`

const FooterTitle = styled.div`
    flex-wrap: wrap;
    height: 40px;
    font-size: 20px;
    color: #293845;
`
