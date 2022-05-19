import { useState } from "react";

export default function Chair({chairInfo}){
    const [clickedIndex, setClickedIndex] = useState({});

    const handleClick = (index) => () => {
        setClickedIndex(state => ({
            ...state,
            [index]: !state[index]
        }));
    };

    function indisponivel(){
        alert('Esse assento não está disponível!');
    }
    
    return(
        chairInfo.seats.map((item,index)=>
            <div key={index} className={`seat ${clickedIndex[index] ? 'selected': null} ${item.isAvailable ? null : 'indisponivel'}`}
            onClick={item.isAvailable ? handleClick(index) : indisponivel}>
                <h3>{item.name}</h3>
            </div>
        )
    );
}