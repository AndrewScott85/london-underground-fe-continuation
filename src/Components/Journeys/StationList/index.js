import React, {useState} from "react";
import {IconContext} from "react-icons";
import {MdExpandLess, MdExpandMore} from "react-icons/md";

const StationList = ({item, secondsToHms}) => {

    const [visible, setVisible] = useState(false);

    const collapseIcon = <IconContext.Provider value={{className: 'expand-collapse'}}>
                            <MdExpandMore className="expand-collapse" size="30px" onClick={() => setVisible(!visible)} />
                         </IconContext.Provider>

    const expandIcon = <IconContext.Provider value={{className: 'expand-collapse'}}>
                            <MdExpandLess className="expand-collapse" size="30px" onClick={() => setVisible(!visible)} />
                       </IconContext.Provider>

    return (
        <>
        <h4 onClick={() => setVisible(!visible)}>{item.line}{visible ? expandIcon : collapseIcon}</h4>
        <p>{secondsToHms(item.time)}</p>
        <p>{item.stops}</p>
            {visible && <table className="station-list-table" cellSpacing="0" cellPadding="0">
                <thead>
                <tr>
                    <th style={{width: "260px"}}>Station</th>
                    <th>Time to next</th>
                </tr>
                </thead>
                <tbody>
                {item.stations.map((station, index) => {
                return (
                    <tr key={index}>
                        <td>{station.stop}</td>
                        <td>{secondsToHms(station.timeToNext)}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>}
        </>
    );
}

export default StationList;
