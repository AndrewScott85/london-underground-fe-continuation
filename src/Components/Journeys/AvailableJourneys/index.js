import StationList, {ChangeList} from "../StationList";
import React from 'react';
// import {motion} from "framer-motion";

const AvailableJourneys = ({journeyOptions}) => {
    // console.log("journeys")
    // console.log(journeyOptions[0])

    // const open = {opacity: 1, y: 8};
    // const closed = {opacity: 0, y: -8};

    return (
        <>
        {/* <motion.div inital={closed} animate={open}> */}
            <h2>Available Routes</h2>
            <h3>Direct Routes</h3>
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
        {/* </motion.div> */}

        {/* <motion.div inital={closed} animate={open}> */}
        <h3>Single Change Routes</h3>
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
        {/* </motion.div> */}

        </>
            );
}

export default AvailableJourneys;
