import { useGameStateStore } from "@/store/game-state-store";
import { CarriageCell } from "@/types/carriage-cell";

const Cell = ({ cellData }: { cellData: CarriageCell }) => {
    const isActiveCell = useGameStateStore(state => state.activeCellID === cellData.id);
    const carriage = useGameStateStore(state => state.carriages.find(carriage => carriage.id === cellData.carriageID));
    if (!carriage) return null;

    const setThisActive = (event: React.MouseEvent<HTMLDivElement>) => {
        const cellID = carriage.cells.find(cell => cell.id === (event.target as HTMLElement).id)?.id || null;
        useGameStateStore.getState().setActiveCellID(cellID);
    };

    return (
        <div
            className={`ui-element ${isActiveCell ? "bg-cyan-700" : "bg-cyan-600"}  size-10 border-cyan-900 border-[0.01px] hover:bg-cyan-700 hover:cursor-pointer flex flex-col justify-center items-center text-center text-zinc-100 font-bold overflow-hidden`}
            id={cellData.id}
            onClick={setThisActive}
        >
            {cellData.data}
        </div>
    );
};

export default function Carriage(
    { id, className }: { id: string, className?: string }
) {
    const carriage = useGameStateStore(state => state.carriages.find(carriage => carriage.id === id));
    if (!carriage) return null;

    // These use style instead of tailwind classes since they are dynamic
    const cols = `repeat(${carriage.width},minmax(0,1fr))`
    const rows = `repeat(${carriage.height},minmax(0,1fr))`

    return (
        <div
            className={`grid p-2 bg-zinc-600 rounded-md w-max h-max ${className}`}
            style={{ gridTemplateColumns: cols, gridTemplateRows: rows }}
        >
            {/* Cells */}
            {carriage.cells.map(cell => (
                <Cell cellData={cell} key={cell.id} />
            ))}
        </div>
    )
}