export default function FormFields({seatIDs,getCpf,client,cpf,getClient}){
    
    return(
        seatIDs.map((item,index) => 
        <div className="inputBox" key={index}>
            <label>Nome do comprador:</label>
            <input type="text" value={client[item]} 
            placeholder="Informe seu nome..." 
            onChange={e => getClient(index, e)} required />
            <label>CPF do comprador:</label>
            <input maxLength={11}
            minLength={11}
            type="text" 
            value={cpf[item]} 
            onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} 
            placeholder="Informe seu cpf..."  
            onChange={getCpf} required />
        </div>
        )
    );
}