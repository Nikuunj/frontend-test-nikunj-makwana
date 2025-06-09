import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/ui/Card";
import Image from "./components/ui/Image";
import Details from "./components/ui/Details";
import Cost from "./components/ui/Cost";

function App() {

    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectCard, setSeletectCard] = useState<number>(0);
    const [size, setSize] = useState<number>(0);
    const [hireDay, setHireDay] = useState<number>(0)
    const [cost, setCost] = useState<number>(0)
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
            setCost(0)
            setSize(0)
            setHireDay(0)
            return
        }
        const val = data.find((val: any) => val.id === id);
        setCost(val.price_before_vat);
        setHireDay(val.hire_period_days);
        setSize(val.size);
        setSeletectCard(id);
    }

    const renderCard = data.map((val: any) => (
        <div onClick={() => handleSelect(val.id)}>
            <Card id={val.id} colrId={selectCard}>  
                <Image size={val.size} allowRoad={val.allowed_on_road} heavyWaste={val.allows_heavy_waste} />
                <Details size={val.size} price={val.price_before_vat} hireDay={val.hire_period_days} id={val.id} colrId={selectCard}/>
            </Card>
        </div>
    ))
    return (
        <> 
            <div className={`text-white grid justify-center items-center min-h-screen py-24`}>
                <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-2 text-xl font-bold text-transparent sm:text-4xl text-center">
                    Choose Your Skip Size
                </p>
                <p className="relative z-20 bg-gradient-to-b from-neutral-500 to-neutral-800 bg-clip-text text-sm text-transparent sm:text-xl text-center">
                    Select the skip size that best suits your needs
                </p> 
                <div className="grid gap-y-7 md:gap-x-2 lg:gap-x-7  md:grid-cols-2 lg:grid-cols-3 transition-all duration-300 py-10">
                    {renderCard}
                </div>
                {selectCard ? <Cost cost={cost} hireDay={hireDay} size={size}/> : ''}
            </div>
        </>
    )
}

export default App