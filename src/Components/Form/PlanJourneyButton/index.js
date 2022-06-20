const PlanJourneyButton = ({selectedStartStation, selectedEndStation}) => {

    let disabled = '';

    if (selectedStartStation === '' || selectedEndStation === '' || selectedStartStation === selectedEndStation) {
        disabled = 'disabled';
    }

    let isDisabled = {disabled};

    return (
        <button {...isDisabled } type="submit" className="plan-journey-button">
            Plan Journey
        </button>
    );
}

export default PlanJourneyButton;
