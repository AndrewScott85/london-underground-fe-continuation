import {useEffect, useState} from "react";

const StartDropdown = ({sortedStations, setSelectedStartStation}) => {

    // const [selectedStartStation, setSelectedStartStation] = useState('');

    const handleSelect = (selection) => {
        // console.log(selection);
        setSelectedStartStation(selection);
    }

    return (
        <select name="stations" id="stations" onChange={(e) => handleSelect(e.target.value)}>
            {sortedStations.map((item, index) => {
                    return (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    );
                }
            )}
        </select>
    );
}

export default StartDropdown;
