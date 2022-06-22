import './App.css';
import Form from "./Components/Form";
import Journeys from "./Components/Journeys";
import Navbar from "./Components/Navbar";
import {useEffect, useState} from "react";

function App() {

    const [sortedStations, setSortedStations] = useState([]);
    const [journeyOptions, setJourneyOptions] = useState(['']);
    const [displayJourneyOptions, setDisplayJourneyOptions] = useState(false);

    const fetchData = async () => {
        const response = await fetch('http://localhost:3001/stations');

        if (!response.ok) {
            throw new Error('Data could not be fetched.');
        }

        return await response.json();
    }

    useEffect(() => {
            fetchData()
                .then((tubeData) => {
                    setSortedStations(tubeData);
                })
                .catch((e) => {
                    console.log(e.message);
                })
        }, []
    );

    useEffect(() => {
        console.log(journeyOptions);
    }, [journeyOptions])

    return (
        <>
        <Navbar />
        <Form sortedStations={sortedStations}
              setJourneyOptions={setJourneyOptions}
              setDisplayJourneyOptions={setDisplayJourneyOptions}
        />
              {displayJourneyOptions && <Journeys journeyOptions={journeyOptions} />}
        </>
    );
}

export default App;
