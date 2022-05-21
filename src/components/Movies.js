import { Link } from "react-router-dom";

export default function Movies({postImages}){

    return(
        postImages.map((item, index) => 
            <Link to={`/sessoes/${item.id}`} key={index}>
                <div className="movieBox">
                    <img src={item.posterURL} alt="" />
                </div>
            </Link>
            )
    );
}