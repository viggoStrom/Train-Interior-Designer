import React from "react";

export default function Carriage({ width, height, className }:
    { width: number, height: number, className?: string }
): React.ReactElement {
    return (
        <div className={`grid grid-cols-[${width}] grid-rows-[${height}] gap-0.5 p-2 bg-zinc-500 rounded-md`}>
            {new Array(width * height).fill(0).map((_, i) => <div className="bg-cyan-950 size-5"></div>)}
        </div>
    );
}