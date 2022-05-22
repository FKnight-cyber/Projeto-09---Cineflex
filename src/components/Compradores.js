import { requestData } from "./Chairs";
import styled from "styled-components";

export default function Compradores(){

    const {
        name,
        cpf,
    } = requestData;
    
    let arr = [];

    for(let i = 0; i < name.length;i++){
        arr[i] = {}
        arr[i].name = name[i]
        arr[i].cpf = cpf[i]
    }

    console.log(arr);

    return(
        arr.map(item => 
            <Teste>
                <h4>{item.name}</h4>
                <h4>CPF: {formataCPF(item.cpf)}</h4>  
            </Teste>     
            )    
    );
}

function formataCPF(cpf){
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

const Teste = styled.div`
    margin-bottom: 10px;
`