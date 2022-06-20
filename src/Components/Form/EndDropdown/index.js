const EndDropdown = ({sortedStations, handleEndSelect}) => {

    return (
        <div className="form-input">
            <label htmlFor="start-stations">End</label>
            <select name="stations"
                    id="start-stations"
                    onChange={(event) => handleEndSelect(event.target.value)}
                    defaultValue={'default'}
            >
                <option disabled value="default">Select a station</option>
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
