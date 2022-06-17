import './App.css';
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import {useEffect, useState} from "react";

function App() {

    const [tubeItems, setTubeItems] = useState([]);
    const [journeyOptions, setJourneyOptions] = useState([]);


    const fetchData = async () => {
        const response = await fetch('https://dev.io-academy.uk/resources/stations/');

        if (!response.ok) {
            throw new Error('Data could not be fetched.');
        }

        return await response.json();
    }

    useEffect(() => {
            fetchData()         // when the data from fetchData() comes back, put it into countryItems.
                .then((tubeData) => {
                    setTubeItems(tubeData);
                })
                .catch((e) => {
                    console.log(e.message);
                })
        }, []
    );

    useEffect(() => {
        console.log(journeyOptions);
    },[journeyOptions])

    // The below will be provided as a route on the backend

    const lineArrays = Object.values(tubeItems);


    const stations = lineArrays.flatMap(station => station);

    const stationsArray = stations.map((index) => {
        return index.name;
    });

    const stationsUnique = new Set(stationsArray);

    const sortedStations = Array.from(stationsUnique).sort();


    return (
        <>
        <Navbar />
        <Form sortedStations={sortedStations} setJourneyOptions={setJourneyOptions}/>
        </>
    );
}

export default App;
