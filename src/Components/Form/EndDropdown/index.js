const EndDropdown = ({endStationList, handleEndSelect}) => {

    return (
        <div className="form-input">
        <label htmlFor="end-stations">End</label>
            <select name="stations" id="end-stations" onChange={(event) => handleEndSelect(event.target.value)}>
                {endStationList.map((item, index) => {
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
