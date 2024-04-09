import StartDropdown from "./StartDropdown";
import EndDropdown from "./EndDropdown";
import PlanJourneyButton from "./PlanJourneyButton";
import {useState} from "react";
import {HiOutlineSwitchVertical} from "react-icons/hi";
import {IconContext} from "react-icons";

const Form = ({sortedStations, setJourneyOptions, setDisplayJourneyOptions}) => {

    const [selectedStartStation, setSelectedStartStation] = useState('');
    const [selectedEndStation, setSelectedEndStation] = useState('');

    const switchButton = <IconContext.Provider value={{className: 'switch-icon'}}>
                            <HiOutlineSwitchVertical className="switch-icon" size="18px"/>
                         </IconContext.Provider>

    const handleStartSelect = (selection) => {
        let withoutCodeStart = selection.slice(0, selection.length - 6);
        setSelectedStartStation(withoutCodeStart);
    }

    const handleEndSelect = (selection) => {
        let withoutCodeEnd = selection.slice(0, selection.length - 6);
        setSelectedEndStation(withoutCodeEnd);
    }

    const handleSwitch = () => {
        const startDropdown = document.querySelector('#start-stations');
        const endDropdown = document.querySelector('#end-stations');
        const startSelected = document.querySelector('#start-stations').value;
        const endSelected = document.querySelector('#end-stations').value;
        startDropdown.value = endSelected;
        endDropdown.value = startSelected;
        setSelectedStartStation(selectedEndStation);
        setSelectedEndStation(selectedStartStation);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = 'https://tubular-be-35fd8a953e6c.herokuapp.com/journeys'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({selectedStartStation, selectedEndStation})
        };

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
            <button onClick={handleSwitch} className="switch-button">{switchButton}</button>
            <EndDropdown sortedStations={sortedStations} handleEndSelect={handleEndSelect} />
            <PlanJourneyButton
                selectedStartStation={selectedStartStation}
                selectedEndStation={selectedEndStation}
                setDisplayJourneyOptions={setDisplayJourneyOptions}
            />
        </form>
    );
}

export default Form;
