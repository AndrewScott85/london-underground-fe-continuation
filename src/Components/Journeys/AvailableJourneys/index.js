const AvailableJourneys = ({journeyOptions}) => {
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
                        <td>{item.line}</td>
                        <td>69m</td>
                        <td>{item.stops}</td>
                    </tr>
                    </tbody>
                );
            })}
        </table>
        </>
    );
}

export default AvailableJourneys;
