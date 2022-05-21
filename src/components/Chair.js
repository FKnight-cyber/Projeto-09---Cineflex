export default function Chair({chairInfo,chairMethods}){   

    const {
        clickedIndex,
        setClickedIndex,
        setSeatIDs,
        seatIDs
    } = chairMethods
    
    const handleClick = (index,a) => () => {
        setClickedIndex(state => ({
            ...state,
            [index]: !state[index]
        }));
        setSeatIDs([...seatIDs,a])
    };

    function indisponivel(){
        alert('Esse assento não está disponível!');
    }
    
    return(
        chairInfo.seats.map((item,index)=>
            <div key={index} className={`seat ${clickedIndex[index] ? 'selected': null} ${item.isAvailable ? null : 'indisponivel'}`}
            onClick={item.isAvailable ? handleClick(index,item.id) : indisponivel}>
                <h3>{item.name}</h3>
            </div>
        )
    );
}