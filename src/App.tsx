import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/ui/Card";
import { DotBackground } from "./components/ui/DotBackgroundDemo";
import Image from "./components/ui/Image";
import Details from "./components/ui/Details";

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
        return <>
            <p className=" bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent grid justify-center items-center h-screen">
                Loading...
            </p> 
        </>
    }
    return (
        <> 
            <div className={`text-white grid justify-center items-center h-screen`}>
                <div className="grid py-2 gap-y-7 md:gap-x-2 lg:gap-x-7  md:grid-cols-2 lg:grid-cols-3 transition-all duration-300">
                    <Card>
                        <Image size={4}/>
                        <Details />
                    </Card>
                    <Card>
                        <Image size={5}/>
                        <Details />
                    </Card>
                    <Card>
                        <Image size={6}/>
                        <Details />
                    </Card>
                    <Card>
                        <Image size={8}/>
                        <Details />
                    </Card>
                    <Card>
                        <Image size={10}/>
                        <Details />
                    </Card>
                    <Card>
                        <Image size={12}/>
                        <Details />
                    </Card>
                    <Card>
                        <Image size={14}/>
                        <Details />
                    </Card>
                    <Card>
                        <Image size={16}/>
                        <Details />
                    </Card>
                    <Card>
                        <Image size={20}/>
                        <Details />
                    </Card>
                    <Card>
                        <Image size={40}/>
                        <Details />
                    </Card>

                </div>
            </div>
        </>
    )
}

export default App