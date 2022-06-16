import {useEffect} from "react";

const EndDropdown = ({sortedStations, selectedStartStation}) => {

    

    const minusStartSelection = sortedStations.filter((station) => {
        return station !== selectedStartStation;
    });

    useEffect(() => {

    }, selectedStartStation)

    return (
        <select name="stations" id="stations">
            {minusStartSelection.map((item, index) => {
                    return (
                        <option key={index}>
                            {item}
                        </option>
                    );
                }
            )}
        </select>
    );
}

export default EndDropdown;
