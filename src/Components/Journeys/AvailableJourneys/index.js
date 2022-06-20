import StationList from "../StationList";
import {useState} from "react";
import {MdExpandMore} from 'react-icons/md';
import {MdExpandLess} from 'react-icons/md';

const AvailableJourneys = ({journeyOptions}) => {

    const [open, setOpen] = useState(false);

    const collapseIcon = <MdExpandMore className="expand-collapse" size="40px" onClick={() => setOpen(!open)} />
    const expandIcon = <MdExpandLess className="expand-collapse" size="40px" onClick={() => setOpen(!open)} />

    return (
        <>
        <h2>Available Routes</h2>
        <table>
            <thead>
                <tr>
                    <th style={{width: "50%"}}>Line</th>
                    <th>Journey Time</th>
                    <th>Stops</th>
                </tr>
            </thead>
            {journeyOptions.map((item, index) => {
                return (
                    <tbody key={index}>
                        <tr>
                            <td onClick={() => setOpen(!open)}>{item.line}{open ? collapseIcon : expandIcon}</td>
                            <td>69m</td>
                            <td>{item.stops}</td>
                        </tr>
                    </tbody>
                );
            })}
        </table>
        {open ? collapseIcon : expandIcon}
        {open && <StationList />}
        </>
    );
}

export default AvailableJourneys;
