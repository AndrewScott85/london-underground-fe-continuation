const PlanJourneyButton = ({selectedStartStation, selectedEndStation, setDisplayJourneyOptions}) => {

    const handleClick = () => {
        setDisplayJourneyOptions(true);
    }

    let disabled = '';

    if (selectedStartStation === '' || selectedEndStation === '' || selectedStartStation === selectedEndStation) {
        disabled = 'disabled';
    }

    let isDisabled = {disabled};

    return (
        <button {...isDisabled } type="submit" className="plan-journey-button" onClick={handleClick}>
            Plan Journey
        </button>
    );
}

export default PlanJourneyButton;
