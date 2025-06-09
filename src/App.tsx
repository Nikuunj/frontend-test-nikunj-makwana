import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/ui/Card";
import Image from "./components/ui/Image";
import Details from "./components/ui/Details";

function App() {

    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectCard, setSeletectCard] = useState<number>(0);

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
    function handleSelect(id: number)  {
        if(selectCard && id === selectCard) {
            setSeletectCard(0)
            return
        }
        setSeletectCard(id);
    }

    const renderCard = data.map((val: any) => (
        <div onClick={() => handleSelect(val.id)}>
            <Card id={val.id} colrId={selectCard}>  
                <Image size={val.size} allowRoad={val.allowed_on_road} heavyWaste={val.allows_heavy_waste} />
                <Details price={val.price_before_vat} hireDay={val.hire_period_days} id={val.id} colrId={selectCard}/>
            </Card>
        </div>
    ))
    return (
        <> 
            <div className={`text-white grid justify-center items-center h-screen`}>
                <div className="grid py-2 gap-y-7 md:gap-x-2 lg:gap-x-7  md:grid-cols-2 lg:grid-cols-3 transition-all duration-300">
                    {renderCard}
                </div>
            </div>
        </>
    )
}

export default App