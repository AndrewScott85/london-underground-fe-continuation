import StationList from "../StationList";
import React from 'react';

const AvailableJourneys = ({journeyOptions}) => {

    const secondsToHms = (time) => {
        if (!time) return '';

        let hours = Math.floor(time / 3600);
        let minutes = Math.ceil((time - (hours * 3600)) / 60);

        if (!hours) {
            return minutes + 'm';
        } else {
            return `${hours}h${minutes}`;
        }
    }

    return (
        <>
        <h2>Available Routes</h2>
        <div className="journey-table">
            <h3>Line</h3>
            <h3>Length</h3>
            <h3>Stops</h3>
            {journeyOptions.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <StationList item={item} secondsToHms={secondsToHms} index={index} />
                    </React.Fragment>
                );
            })}
        </div>
        </>
    );
}

export default AvailableJourneys;
