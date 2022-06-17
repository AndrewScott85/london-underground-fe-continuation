const StartDropdown = ({sortedStations, handleStartSelect}) => {

    return (
        <select name="stations" id="start-stations" onChange={(event) => handleStartSelect(event.target.value)}>
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
