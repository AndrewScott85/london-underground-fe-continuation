import {useEffect, useState} from "react";

const StartDropdown = ({startStationList, handleSelect}) => {

    return (
        <select name="stations" id="stations" onChange={(event) => handleSelect(event.target.value)}>
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
