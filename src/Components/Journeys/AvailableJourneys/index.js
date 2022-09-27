import StationList, {ChangeList} from "../StationList";
import React from 'react';
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const AvailableJourneys = ({journeyOptions}) => {

    return (
        <>
            <h2>Available Routes</h2>
            <h3>Direct Routes</h3>
            {journeyOptions[0].length === 0 ? <ErrorMessage /> :
            <div className="journey-table">
                <h3>Line</h3>
                <h3>Length</h3>
                <h3>Stops</h3>
                <h3>Price</h3>
                {journeyOptions[0].map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <StationList item={item} index={index} />
                        </React.Fragment>
                    );
                })}
            </div>
        }

        <h3>Single Change Routes</h3>
        {journeyOptions[1].length === 0 ? <ErrorMessage /> :
        <div className="journey-table">
            <h3>Lines</h3>
            <h3>Length</h3>
            <h3>Stops</h3>
            <h3>Price</h3>
            {journeyOptions[1].map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <ChangeList item={item} index={index} />
                    </React.Fragment>
                );
            })}
        </div>
        }

        </>
            );
}

export default AvailableJourneys;
