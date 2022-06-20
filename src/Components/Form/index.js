import StartDropdown from "./StartDropdown";
import EndDropdown from "./EndDropdown";
import PlanJourneyButton from "./PlanJourneyButton";
import {useState} from "react";

const Form = ({sortedStations, setJourneyOptions}) => {

    const [selectedStartStation, setSelectedStartStation] = useState('');
    const [selectedEndStation, setSelectedEndStation] = useState('');

    const handleStartSelect = (selection) => {
        setSelectedStartStation(selection);
    }

    const handleEndSelect = (selection) => {
        setSelectedEndStation(selection);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = 'http://localhost:3001/journeys'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({selectedStartStation, selectedEndStation})
        };

        console.log(JSON.stringify({selectedStartStation, selectedEndStation}))

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(journeyData => {
                setJourneyOptions(journeyData);
            })
            .catch(error => console.log('Form submit error', error))
    }

    return (
        <form onSubmit={handleSubmit} className="journey-form">
            <StartDropdown sortedStations={sortedStations} handleStartSelect={handleStartSelect} />
            <EndDropdown sortedStations={sortedStations} handleEndSelect={handleEndSelect} />
            <PlanJourneyButton />
        </form>
    );
}

export default Form;
