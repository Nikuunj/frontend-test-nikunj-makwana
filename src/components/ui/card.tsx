
function Card({ children }: { children: React.ReactNode }) {

    return (
        <div className={`border-2 border-gray-800 hover:border-gray-700 w-fit px-5 py-5 rounded-lg flex flex-col transition-all duration-150`}>{ children }</div>
    )
}

export default Card