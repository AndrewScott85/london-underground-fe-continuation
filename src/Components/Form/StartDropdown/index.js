import {useEffect, useState} from "react";

const StartDropdown = ({startStationList, handleStartSelect}) => {

    return (
        <select name="stations" id="start-stations" onChange={(event) => handleStartSelect(event.target.value)}>
            {startStationList.map((item, index) => {
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
