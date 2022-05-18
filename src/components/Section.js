import { Link } from "react-router-dom";

export default function Section({sectionInfo}){

    return(
        sectionInfo.days.map((item, index) => 
            <>
                <h6>{`${item.weekday} - ${item.date}`}</h6>
                <div key={index} className="hourContainer" >
                    <Link to={`/assentos/${item.showtimes[0].id}`} style={{ textDecoration: 'none' }} >
                        <div className="hourBox">
                            <h5>{`${item.showtimes[0].name}`}</h5>
                        </div>
                    </Link>
                    <Link to={`/assentos/${item.showtimes[1].id}`} style={{ textDecoration: 'none' }} >
                        <div className="hourBox">
                            <h5>{`${item.showtimes[1].name}`}</h5>
                        </div>
                    </Link>
                </div>
            </>
                )
    );
}