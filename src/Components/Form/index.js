import StartDropdown from "./StartDropdown";
import EndDropdown from "./EndDropdown";
import SearchButton from "./SearchButton";
import {useState} from "react";

const Form = ({sortedStations}) => {

    const [selectedStartStation, setSelectedStartStation] = useState('');

    return (
        <form>
            <StartDropdown sortedStations={sortedStations} setSelectedStartStation={setSelectedStartStation}/>
            <EndDropdown sortedStations={sortedStations} selectedStartStation={selectedStartStation}/>
            <SearchButton />
        </form>
    );
}

export default Form;
