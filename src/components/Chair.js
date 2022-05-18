export default function Chair({chairInfo}){
    console.log(chairInfo)
    return(
        chairInfo.seats.map((item,index)=>
            <div key={index} className={`seat ${item.isAvailale ? ' ' : 'indisponivel'}`}>
                <h3>{item.name}</h3>
            </div>
        )
    );
}