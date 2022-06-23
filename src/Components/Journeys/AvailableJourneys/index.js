import StationList from "../StationList";
import React from 'react';
import {motion} from "framer-motion";

const AvailableJourneys = ({journeyOptions}) => {

    const open = {opacity: 1, y: 8};
    const closed = {opacity: 0, y: -8};

    return (
        <motion.div inital={closed} animate={open}>
            <h2>Available Routes</h2>
            <div className="journey-table">
                <h3>Line</h3>
                <h3>Length</h3>
                <h3>Stops</h3>
                <h3>Price</h3>
                {journeyOptions.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <StationList item={item} index={index} />
                        </React.Fragment>
                    );
                })}
            </div>
        </motion.div>
    );
}

export default AvailableJourneys;
