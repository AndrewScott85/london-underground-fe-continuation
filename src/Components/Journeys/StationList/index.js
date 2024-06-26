import React, {useState} from "react";
import {IconContext} from "react-icons";
import {MdExpandLess, MdExpandMore} from "react-icons/md";
import {motion} from "framer-motion";
import secondsToHms from '../../../imports/library.js';
import Bakerloo from './Images/bakerloo.svg';
import Central from './Images/central.svg';
import District from './Images/district.svg';
import HSmithCity from './Images/hammersmith-city.svg';
import Jubilee from './Images/jubilee.svg';
import Metropolitan from './Images/metropolitan.svg';
import Northern from './Images/northern.svg';
import Piccadilly from './Images/picadilly.svg';
import Victoria from './Images/victoria.svg';
import WLooCity from './Images/waterloo-city.svg';


const displaySvg = (line) => {
    switch (line) {
        case 'Bakerloo': return Bakerloo;
        case 'Central': return Central;
        case 'District': return District;
        case 'Hammersmith and Circle': return HSmithCity;
        case 'Jubilee': return Jubilee;
        case 'Metropolitan': return Metropolitan;
        case 'Northern': return Northern;
        case 'Piccadilly': return Piccadilly;
        case 'Victoria': return Victoria;
        case 'Waterloo and City': return WLooCity;
        default: return '';
    }
}


const StationList = ({item}) => {

    const [visible, setVisible] = useState(false);

    const collapseIcon = <IconContext.Provider value={{className: 'expand-collapse'}}>
                            <MdExpandMore className="expand-collapse" size="30px" onClick={() => setVisible(!visible)} />
                         </IconContext.Provider>

    const expandIcon = <IconContext.Provider value={{className: 'expand-collapse'}}>
                            <MdExpandLess className="expand-collapse" size="30px" onClick={() => setVisible(!visible)} />
                       </IconContext.Provider>

    const open = {opacity: 1, y: 8};
    const closed = {opacity: 0, y: 0};

    return (
        <>
        <div className="line-img-container">
            <img src={displaySvg(item.line)} onClick={() => setVisible(!visible)} alt="" />{visible ? expandIcon : collapseIcon}
        </div>
        <p>{secondsToHms(item.time)}</p>
        <p>{item.stops}</p>
        <p>£{(item.price / 100).toFixed(2)}</p>
            {visible && <motion.table
                className="station-list-table"
                inital={closed}
                animate={open}
                >
                <thead>
                    <tr>
                        <th style={{width: "260px"}}>Station</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                {item.stations.map((station, index) => {
                    return (
                        <React.Fragment key={index}>
                            <tr>
                                <td>{station.stop}</td>
                            </tr>
                            <tr>
                            {index === item.stations.length -1 ? <></> :
                            <>
                            <td>|</td>
                            <td>{secondsToHms(station.time)}</td>
                            </>
                            }
                            </tr>
                       </React.Fragment>
                    );
                })}
                </tbody>
            </motion.table>}
        </>
    );
}


export const ChangeList = ({item}) => {

    const [visible, setVisible] = useState(false);

    const collapseIcon = <IconContext.Provider value={{className: 'expand-collapse'}}>
                            <MdExpandMore className="expand-collapse" size="30px" onClick={() => setVisible(!visible)} />
                         </IconContext.Provider>

    const expandIcon = <IconContext.Provider value={{className: 'expand-collapse'}}>
                            <MdExpandLess className="expand-collapse" size="30px" onClick={() => setVisible(!visible)} />
                       </IconContext.Provider>

    const open = {opacity: 1, y: 8};
    const closed = {opacity: 0, y: 0};


    return (
        <>
        <div className="line-img-container">
            <img id="change-img" src={displaySvg(item.lines[0])} alt={item.lines[0]}/>
            <img id="change-img" src={displaySvg(item.lines[1])} onClick={() => setVisible(!visible)} alt={item.lines[1]}/>
            {visible ? expandIcon : collapseIcon}
        </div>
        <p>{secondsToHms(item.time)}</p>
        <p>{item.stops}</p>
        <p>£{(item.price / 100).toFixed(2)}</p>
            {visible && <motion.div 
            className="station-list-table"
            initial={closed}
            animate={open}
            >
            <div className ="change-img-container">
                    <img src={displaySvg(item.lines[0])} alt={item.lines[0]}/>
                    <h3>{item.firstLegStops} stops</h3>
                    <h3>{secondsToHms(item.firstLegTime)}</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th style={{width: "240px"}}>Station</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                {item.stations[0].map((station, index) => {
                    return (
                        <React.Fragment key={index}>
                            <tr>
                                <td>{station.stop}</td>
                            </tr>
                            <tr>
                            {index === item.stations[0].length -1 ? <></> :
                            <>
                            <td>|</td>
                            <td>{secondsToHms(station.time)}</td>
                            </>
                            }
                            </tr>
                       </React.Fragment>
                    );
                })}
                </tbody>
            </table>
            <div className ="change-img-container">
                <img src={displaySvg(item.lines[1])} alt={item.lines[1]} />
                <h3>{item.lastLegStops} stops</h3>
                <h3>{secondsToHms(item.lastLegTime)}</h3>
            </div>
            <table>    
                <thead>
                    <tr>
                        <th style={{width: "260px"}}>Station</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                {item.stations[1].map((station, index) => {
                    return (
                        <React.Fragment key={index}>
                            <tr>
                                <td>{station.stop}</td>
                            </tr>
                            <tr>
                            {index === item.stations[1].length -1 ? <></> :
                            <>
                            <td>|</td>
                            <td>{secondsToHms(station.time)}</td>
                            </>
                            }
                            </tr>
                       </React.Fragment>
                    );
                })}
                </tbody>
            </table>
            </motion.div>}
        </>
    );
}


export default StationList;


