import './App.css';
import Form from "./Components/Form";
import Journeys from "./Components/Journeys";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";

function App() {

    const [sortedStations, setSortedStations] = useState([]);
    const [journeyOptions, setJourneyOptions] = useState([]);
    const [displayJourneyOptions, setDisplayJourneyOptions] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://tubular-be-35fd8a953e6c.herokuapp.com/stations');

            if (!response.ok) {
                throw new Error('Data could not be fetched.');
            }

            const tubeData = await response.json();
            setSortedStations(tubeData);
        } catch (e) {
            console.error('Error fetching data:', e); // Log for debugging purposes
            setError(e.message); // Set error message state
        } finally {
            setIsLoading(false); // Set loading to false when done fetching
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    let content;

    if (isLoading) {
        content = <p className='loading_message'>Loading. Please Wait...</p>;
      } else if (error) {
        content = <p className='error_message'>Error fetching data: {error}</p>;
      } else {
        content = (
          <>
            <Form
              sortedStations={sortedStations}
              setJourneyOptions={setJourneyOptions}
              setDisplayJourneyOptions={setDisplayJourneyOptions}
            />
            {displayJourneyOptions && <Journeys journeyOptions={journeyOptions} />}
          </>
        );
      }
    

    return (
        <>
            <Navbar />
            {content}
                     </>
    );
}

export default App;
