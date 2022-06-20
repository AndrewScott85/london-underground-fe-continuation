const AvailableJourneys = ({journeyOptions}) => {
    return (
        <>
        <h2>Available Routes</h2>
        <table>
            <thead>
            <tr>
                <th>Line</th>
                <th>Stops</th>
            </tr>
            </thead>
            {journeyOptions.map((item, index) => {
                return (
                    <tbody key={index}>
                    <tr>
                        <td>{item.line}</td>
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
