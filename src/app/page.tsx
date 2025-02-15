import Link from "next/link";

export default function MainMenu() {
    return (
        <main className="flex flex-col items-center">
            <h1 className="mt-20">Main Menu</h1>

            <Link className="mt-5" href={"/workshop"}>
                <button tabIndex={-1}>Start</button>
            </Link>
        </main>
    );
}