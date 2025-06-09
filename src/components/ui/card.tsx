
function Card({ children }: { children: React.ReactNode }) {

    return (
        <div className={`border-2 border-gray-800 w-fit px-5 py-5 rounded-sm`}>{ children }</div>
    )
}

export default Card