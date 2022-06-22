import React, {useState} from "react";
import {IconContext} from "react-icons";
import {MdExpandLess, MdExpandMore} from "react-icons/md";
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

const StationList = ({item}) => {

    const [visible, setVisible] = useState(false);

    const collapseIcon = <IconContext.Provider value={{className: 'expand-collapse'}}>
                            <MdExpandMore className="expand-collapse" size="30px" onClick={() => setVisible(!visible)} />
                         </IconContext.Provider>

    const expandIcon = <IconContext.Provider value={{className: 'expand-collapse'}}>
                            <MdExpandLess className="expand-collapse" size="30px" onClick={() => setVisible(!visible)} />
                       </IconContext.Provider>

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

    return (
        <>
        <div className="line-img-container">
            <img src={displaySvg(item.line)} onClick={() => setVisible(!visible)} alt="" />{visible ? expandIcon : collapseIcon}
        </div>
        <p>{secondsToHms(item.time)}</p>
        <p>{item.stops}</p>
        <p>£{(item.price / 100).toFixed(2)}</p>
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
