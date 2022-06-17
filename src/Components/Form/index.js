import StartDropdown from "./StartDropdown";
import EndDropdown from "./EndDropdown";
import SearchButton from "./SearchButton";
import {useEffect, useState} from "react";

const Form = ({sortedStations}) => {

    const [selectedStartStation, setSelectedStartStation] = useState('');
    const [selectedEndStation, setSelectedEndStation] = useState('');
    const [endStationList, setEndStationList] = useState([]);
    const [startStationList, setStartStationList] = useState([]);

    const handleStartSelect = (selection) => {
        setSelectedStartStation(selection);
        const filteredEndList = sortedStations.filter((item) => {
            return item !== selection;
        });
        setEndStationList(filteredEndList);
    }

    const handleEndSelect = (selection) => {
        setSelectedEndStation(selection);
        const filteredStartList = sortedStations.filter((item) => {
            return item !== selection;
        });
        setStartStationList(filteredStartList);
    }

    useEffect(() => {
        setStartStationList(sortedStations);
        setEndStationList(sortedStations);
    }, [])

    return (
        <form>
            <StartDropdown startStationList={startStationList} handleStartSelect={handleStartSelect}/>
            <EndDropdown endStationList={endStationList} handleEndSelect={handleEndSelect}/>
            <SearchButton />
        </form>
    );
}

export default Form;
