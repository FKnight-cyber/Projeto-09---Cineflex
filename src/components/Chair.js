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
        if(seatIDs.includes(a)){
            window.confirm('Você quer cancelar a reserva deste assento?') ? 
            onConfirm("confirm",a) : onCancel("cancel",index)
        }else{
            setSeatIDs([...seatIDs,a]);
        }
    };

    function onConfirm(check,a){
        if(check === 'confirm'){
            seatIDs.splice(seatIDs.indexOf(a),1);
            setSeatIDs([...seatIDs]);
        }
    }

    function onCancel(check,index){
        clickedIndex[index] = false;
        return;
    }

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