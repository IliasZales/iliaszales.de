import React from "react";

type StackButtonProps = {
    name: string,
    color: string,
}

export const StackButton: React.FC<StackButtonProps> =({name, color}) => {

    return (
        <div className="mx-2 min-w-[80px]">
            <div className={`w-6xl rounded-xl radius text-black px-3 my-3 ${color}`}>{name}</div>
        </div>
    );
};