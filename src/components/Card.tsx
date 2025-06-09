import React from 'react';

interface CardProps {
    children: React.ReactNode;
    id: number;
    colrId: number;
}

function Card({ children, id, colrId }: CardProps) {
    const style = ['border-gray-800 hover:border-gray-700', 'border-blue-800 hover:border-blue-700']
    return (
        <div className={`border-2 ${id === colrId ? style[1] : style[0]} w-fit px-5 py-5 rounded-lg flex flex-col transition-all duration-150`}>
            {children}
        </div>
    )
}

export default Card;