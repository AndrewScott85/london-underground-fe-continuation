import {useEffect} from "react";

const EndDropdown = ({endStationList}) => {



    // const minusStartSelection = sortedStations.filter((station) => {
    //     return station !== selectedStartStation;
    // });

    // useEffect(() => {
    //
    // }, selectedStartStation)

    return (
        <select name="stations" id="stations">
            {endStationList.map((item, index) => {
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
