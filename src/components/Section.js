export default function Section({sectionInfo}){

    console.log(sectionInfo?.days[0])
    return(
        sectionInfo.map(item => 
            <>
                <h6>a</h6>
                <div className="hourContainer">
                    <div className="hourBox">
                        <h5>15:00</h5>
                    </div>
                    <div className="hourBox">
                        <h5>19:00</h5>
                    </div>
                </div>
            </>
                )
    );
}