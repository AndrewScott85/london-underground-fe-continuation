const EndDropdown = ({sortedStations, handleEndSelect}) => {

    return (
        <select name="stations" id="end-stations" onChange={(event) => handleEndSelect(event.target.value)}>
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

export default EndDropdown;
