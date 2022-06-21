import ErrorMessage from "./ErrorMessage/ErrorMessage";
import AvailableJourneys from "./AvailableJourneys";

const Journeys = ({journeyOptions}) => {



    return (
        <div className="journey-box">
            {journeyOptions.length === 0 ? <ErrorMessage /> : <AvailableJourneys journeyOptions={journeyOptions}/>}
        </div>
    );
}

export default Journeys;
