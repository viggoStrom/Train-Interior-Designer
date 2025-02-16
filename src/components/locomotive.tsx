
export default function Locomotive(
    { width, height, className }: { width: number, height: number, className?: string }
) {
    // These use style instead of tailwind classes since they are dynamic
    const cols = `repeat(${width},minmax(0,1fr))`
    const rows = `repeat(${height},minmax(0,1fr))`

    return (
        <div
            className={`grid ${className} p-2 bg-zinc-600 rounded-md w-max h-max`}
            style={{ gridTemplateColumns: cols, gridTemplateRows: rows }}
        >
            {new Array(width * height).fill(0).map((_, i) => (<div className="size-7" key={i}></div>))}
        </div>
    )
}