const Journeys = ({journeyOptions}) => {

    const cleanUp = (dirtyData) => {
        let cleanData = [];
        dirtyData.forEach(item => {
            cleanData.push(item.replace(/[_]/g, ' '))
        });
        return cleanData;
    }

    const cleanedJourneyData = cleanUp(journeyOptions);

    return (
        <div>
            {cleanedJourneyData.map((item, index) => {
                return (
                    <p key={index}>{item}</p>
                );
            })}
        </div>
    );
}

export default Journeys;
