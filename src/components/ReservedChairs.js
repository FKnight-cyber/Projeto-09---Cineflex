import { requestData } from "./Chairs";

export default function ReservedChairs(){
    const {
        seats
    } = requestData;

    return(
        seats.map((item,index) => 
            <h4 key={index}>Assento {parseInt(item)+1}</h4>
        )
    );
}