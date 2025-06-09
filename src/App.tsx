import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/ui/Card";
import { DotBackground } from "./components/ui/DotBackgroundDemo";
import Image from "./components/ui/Image";

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
        <>
            <div className={"bg-black fixed h-screen w-screen -z-30 overflow-hidden"}>
                <DotBackground />
            </div> 
            <div className={`text-white grid justify-center items-center h-screen`}>
                <div className="grid py-2 gap-y-7 md:gap-x-2 lg:gap-x-7  md:grid-cols-2 lg:grid-cols-3 transition-all duration-300">
                    <Card>
                        <Image />
                    </Card>
                    <Card>
                        <Image />
                    </Card>
                    <Card>
                        <Image />
                    </Card>
                    <Card>
                        <Image />
                    </Card>
                    <Card>
                        <Image />
                    </Card>
                    <Card>
                        <Image />
                    </Card>

                </div>
            </div>
        </>
    )
}

export default App