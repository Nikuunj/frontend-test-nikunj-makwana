import { useState } from "react"
import Info from "../icons/Info"
import Click from "../icons/Click";
import Triangle from "../icons/Triangle";
import Checked from "../icons/Checked";
import QuestionMark from "../icons/QuestionMark";

function Image({ size, allowRoad, heavyWaste }: { size: number, allowRoad: boolean, heavyWaste: boolean }) {

    const [hover, setHove] = useState<boolean>(false);
    const [time, setTime] = useState<NodeJS.Timeout>();

    const imageUrl = {
        '4': 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg',
        '5' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg',
        '6' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg',
        '8' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg',
        '10' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg',
        '12' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg',
        '14' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg',
        '16' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg',
        '20' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg',
        '40' : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg',
    }

    function handlHoverClick() {
        setHove(pre => !pre);
        clearTimeout(time);
        const res =  setTimeout(() => {
            setHove(false);
        }, 2000)
        setTime(res);
    }
    return (
        <div className={`bg-gray-700 rounded-lg w-64 sm:w-80 xl:w-96 transition-all duration-300 relative `}>
            <div onClick={handlHoverClick}>
                <div>
                    {/* @ts-ignore */}
                    <img src={imageUrl[size]} className={`rounded-lg h-40 sm:h-48 xl:h-60 w-full`} alt="No preview" />
                </div>
                <div className={`${hover? 'z-20' : '-z-20' } rounded-lg bg-gray-700/60 transition-all duration-150 h-40 sm:h-48 xl:h-60 w-full items-center justify-center flex flex-col gap-2 absolute bottom-0`}>
                        {allowRoad ? 
                            <div className={`flex gap-1 items-center text-green-500 bg-black px-2 py-1 rounded-md`}>
                                <Checked />
                                <span>Allowed On The Road</span>
                            </div> : 
                            <div className={`flex gap-1 items-center text-yellow-600 bg-black px-2 py-1 rounded-md`}>
                                <Triangle />
                                <span>Not Allowed On The Road</span>
                            </div>}
                        {heavyWaste ? 
                            <div className={`flex gap-1 items-center text-green-500 bg-black px-2 py-1 rounded-md`}>
                                <Checked />
                                <span>Allowed Heavy weste</span>
                            </div> : 
                            <div className={`flex gap-1 items-center text-yellow-600 bg-black px-2 py-1 rounded-md`}>
                                <Triangle />
                                <span>Not Allowed Heavy Weste</span>
                            </div>}
                </div>
                <div className={"rounded-lg h-40 sm:h-48 xl:h-60 w-full items-center justify-center flex absolute bottom-0"} title={`${size} Yards`}>
                    <Click/>
                </div>
            </div>
            <div className={"top-0 left-0 absolute px-3 text-center py-2 rounded-full z-40"} title={`${size} Yards`}><Info/></div>
            <div className={"-bottom-10 right-0 absolute px-3 text-center py-2 rounded-full z-50 text-gray-600"} onClick={handlHoverClick} title={`Details - click to see more details`}><QuestionMark/></div>
        </div>
    )
}

export default Image