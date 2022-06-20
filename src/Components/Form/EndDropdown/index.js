const EndDropdown = ({sortedStations, handleEndSelect}) => {

    return (
        <div className="form-input">
            <label htmlFor="start-stations">End</label>
            <select name="stations" id="start-stations" onChange={(event) => handleEndSelect(event.target.value)}>
                <option disabled selected value>Select a station</option>
                {sortedStations.map((item, index) => {
                        return (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        );
                    }
                )}
            </select>
        </div>
    );
}

export default EndDropdown;
