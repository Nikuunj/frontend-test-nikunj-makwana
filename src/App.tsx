import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/ui/card";
import { DotBackground } from "./components/ui/DotBackgroundDemo";

function App() {

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    async function getData() {
        try {
            setLoading(true);
            const response = await axios.get('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
            setData(response.data);
            console.log("Data fetched successfully:", response.data);   
        } catch (error) {
            console.error("Error fetching data:", error);
            return;
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className={"bg-black"}>
            <DotBackground />
        </div> 
    )
}

export default App