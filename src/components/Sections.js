import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Section from "./Section";

export default function Sections(){
    const { idFilme } = useParams();
    const [data,setData] = useState([{}]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then((response) => {
            setData(response.data);
        });
    },[]);

    return(
        <>
            <header>
                <div className="sub-topo">Selecione o horário</div>
            </header>
            <content>
                <Section sectionInfo={data} />
            </content>
        </>
    );
}