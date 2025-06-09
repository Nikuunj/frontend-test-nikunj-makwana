import Checked from "../icons/Checked"
import Clock from "../icons/Clock"
import RightArrow from "../icons/RightArrow"

interface DetailsProps {
    size: number
    price: number
    hireDay: number
    id: number,
    colrId: number
}

function Details({ size, price, hireDay, id, colrId }: DetailsProps) {
    
    return (
        <div className={`flex flex-col gap-2 mt-3 tracking-wide`}>
            <div className={`text-xl font-bold`}>
                {size} Yard Skip
            </div>
            <div className={`text-gray-400 text-sm flex  gap-1 items-center`}>
                <Clock /> {hireDay} day hire period
            </div>
            <div className={`mt-2 flex justify-between items-center`}>
                <div className={'text-green-600 text-2xl font-bold'}>
                    £{price}
                </div>
                <div>{id === colrId ? <div className="text-green-600"><Checked/></div> : <RightArrow />}</div>
            </div>
        </div>
    )
}

export default Details