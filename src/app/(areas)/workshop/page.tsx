"use client";

import Carriage from "@/components/carriage";
import Locomotive from "@/components/locomotive";
import { Input } from "@/components/ui/input";
import { useGameStateStore } from "@/store/game-state-store";
import { CarriageData } from "@/types/carriage";
import { CarriageCell } from "@/types/carriage-cell";
import { useEffect, useState } from "react";

export default function WorkshopPage() {
    const gameStateStore = useGameStateStore();
    const [activeCellData, setActiveCellData] = useState<CarriageCell | null>(null);

    const carriages: CarriageData[] = [
        { id: "1", height: 9, width: 3, cells: [] },
        { id: "2", height: 9, width: 3, cells: [] },
        { id: "3", height: 9, width: 3, cells: [] },
        { id: "4", height: 9, width: 3, cells: [] },
        { id: "5", height: 9, width: 3, cells: [] },
    ];

    // Create cells
    carriages.map((carriage, i) => {
        for (let y = 0; y < carriage.height; y++) {
            for (let x = 0; x < carriage.width; x++) {
                carriage.cells.push({
                    id: `${carriage.id}-${x}-${y}`,
                    carriageID: carriage.id,
                    x,
                    y,
                    data: "",
                });
            }
        }
    });

    useEffect(() => {
        gameStateStore.setCarriages(carriages);
        gameStateStore.setActiveCellID(null);
    }, []);

    useEffect(() => {
        if (gameStateStore.activeCellID) {

            const carriageID = gameStateStore.activeCellID.split("-")[0];
            const carriage = gameStateStore.carriages.find((c) => c.id === carriageID);
            const cellData = carriage?.cells.find((c) => c.id === gameStateStore.activeCellID);

            if (!cellData) {
                gameStateStore.clearActiveCellID();
                return;
            }

            setActiveCellData(cellData);
            gameStateStore.updateCellData(cellData.id, cellData.data);
        } else {
            setActiveCellData(null);
        }
    }, [gameStateStore.activeCellID]);

    const clearActiveCellID = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLElement).closest(".ui-element")) return;

        gameStateStore.clearActiveCellID();
    };

    return (
        <main className="grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] h-full" onClick={clearActiveCellID}>
            <h1 className="mt-6 col-span-2 text-center">Workshop</h1>

            <section className="col-start-1 ms-5">
                <h2>Carriage</h2>
                {activeCellData ? (
                    <div className="ui-element">
                        <p>Carriage ID: {activeCellData.carriageID}</p>
                        <p>Cell ID: {activeCellData.id}</p>
                        <p>X: {activeCellData.x}</p>
                        <p>Y: {activeCellData.y}</p>
                        <p>Data:</p>
                        <Input className="w-52" type="text" value={activeCellData.data}
                            onChange={(e) => {
                                activeCellData.data = e.target.value;
                                gameStateStore.updateCellData(activeCellData.id, e.target.value);
                            }} />
                    </div>
                ) : (
                    <p>No active cell</p>
                )}
            </section>

            <aside className="col-start-2 flex flex-col items-center me-5 pe-2 gap-y-3 h-[95%] overflow-y-scroll">
                <Locomotive width={4} height={10} />

                {carriages.map((carriage) => (
                    <Carriage id={carriage.id} key={carriage.id} />
                ))}
            </aside>
        </main>
    );
}