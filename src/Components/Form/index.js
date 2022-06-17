import StartDropdown from "./StartDropdown";
import EndDropdown from "./EndDropdown";
import SearchButton from "./SearchButton";
import {useEffect, useState} from "react";

const Form = ({sortedStations}) => {

    // console.table(sortedStations);

    const [selectedStartStation, setSelectedStartStation] = useState('');
    const [endStationList, setEndStationList] = useState([]);
    const [startStationList, setStartStationList] = useState([]);

    const handleSelect = (selection) => {
        console.log(selection);
        setSelectedStartStation(selection);
        const filteredEndList = sortedStations.filter((item) => {
            return item !== selection;
        });

        setEndStationList(filteredEndList);


    }

    useEffect(() => {
        setStartStationList(sortedStations);
        setEndStationList(sortedStations);
    }, [])

    return (
        <form>
            <StartDropdown startStationList={startStationList} handleSelect={handleSelect}/>
            <EndDropdown endStationList={endStationList} />
            <SearchButton />
        </form>
    );
}

export default Form;
