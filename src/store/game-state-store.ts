import { CarriageData } from "@/types/carriage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface GameStateStore {
    carriages: CarriageData[];
    addCarriage: (carriage: CarriageData) => void;
    removeCarriage: (carriageID: string) => void;
    setCarriages: (carriages: CarriageData[]) => void;
    activeCellID: string | null;
    setActiveCellID: (cellID: string | null) => void;
    clearActiveCellID: () => void;
    updateCellData: (cellID: string, data: string) => void;
}

const safeLocalStorage = {
    getItem: (name: string) =>
        typeof window !== "undefined" && window.localStorage
            ? window.localStorage.getItem(name)
            : null,
    setItem: (name: string, value: string) => {
        if (typeof window !== "undefined" && window.localStorage) {
            window.localStorage.setItem(name, value);
        }
    },
    removeItem: (name: string) => {
        if (typeof window !== "undefined" && window.localStorage) {
            window.localStorage.removeItem(name);
        }
    },
};

export const useGameStateStore = create<GameStateStore>()(
    persist(
        (set) => ({
            carriages: [],
            addCarriage: (carriage) =>
                set((state) => ({ carriages: [...state.carriages, carriage] })),
            removeCarriage: (carriageID) =>
                set((state) => ({
                    carriages: state.carriages.filter((c) => c.id !== carriageID),
                })),
            setCarriages: (carriages) => set({ carriages }),
            activeCellID: null,
            setActiveCellID: (cellID) => set({ activeCellID: cellID }),
            clearActiveCellID: () => set({ activeCellID: null }),
            updateCellData: (cellID, data) =>
                set((state) => {
                    const carriages = state.carriages.map((carriage) => {
                        const cells = carriage.cells.map((cell) => {
                            if (cell.id === cellID) {
                                return { ...cell, data };
                            }
                            return cell;
                        });
                        return { ...carriage, cells };
                    });
                    return { carriages };
                }),
        }),
        {
            name: "game-state-store",
            storage: createJSONStorage(() => safeLocalStorage),
        }
    )
);