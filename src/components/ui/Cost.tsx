import RightArrow from "../icons/RightArrow";

interface ConstProps {
    cost: number;
    hireDay: number;
    size: number;
}
function Cost({ cost, hireDay, size }: ConstProps) {
    return (
        <div className={'fixed bottom-0 w-full pb-2 pt-2 border-t gap-2 sm:gap-4  flex flex-col bg-gray-950 px-2 z-50 border-gray-700 '}>
                <div className="text-center text-xs text-gray-400">
                    Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
                </div>
                <div className="flex justify-between sm:px-24">
                    <div className="flex gap-1 sm:gap-2 items-center text-sm text-gray-400">
                        <div className="text-xs sm:text-[14px]" >{size} Yard Skip</div>
                        <div className="sm:text-2xl text-lg text-green-600 font-bold">£{cost}</div>
                        <div className="text-xs sm:text-[14px]">{hireDay} day hire</div>
                    </div>
                    <div className="flex  gap-1 sm:gap-2 justify-center items-center fond sm:text-lg text-md">
                        <div className="bg-gray-800 sm:px-5 px-2 py-1 sm:py-2 rounded-sm">
                            Back
                        </div>
                        <div className="bg-green-800 sm:px-5 px-2 py-1 sm:py-2 rounded-sm flex justify-center items-center gap-2" >
                            Continue <RightArrow />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Cost