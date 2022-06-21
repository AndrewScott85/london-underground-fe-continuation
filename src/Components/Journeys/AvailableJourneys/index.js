import StationList from "../StationList";
import React from 'react';

const AvailableJourneys = ({journeyOptions}) => {

    return (
        <>
        <h2>Available Routes</h2>
        <div className="journey-table">
            <h3>Line</h3>
            <h3>Changes</h3>
            <h3>Length</h3>
            <h3>Stops</h3>
            {journeyOptions.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <StationList item={item} index={index} />
                    </React.Fragment>
                );
            })}
        </div>
        </>
    );
}

export default AvailableJourneys;
