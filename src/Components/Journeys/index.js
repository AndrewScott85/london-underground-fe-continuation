const Journeys = ({journeyOptions}) => {

    const cleanUp = (dirtyData) => {
        let cleanData = [];
        dirtyData.forEach(item => {
            cleanData.push(item.replace(/[_]/g, ' '))
        });
        return cleanData;
    }

    let journeyData = [];

    journeyOptions.length === 0 ? journeyData.push('No journeys found. Bummer.') : journeyData = cleanUp(journeyOptions);
    
    return (
        <div>
            {journeyData.map((item, index) => {
                return (
                    <p key={index}>{item}</p>
                );
            })}
        </div>
    );
}

export default Journeys;
