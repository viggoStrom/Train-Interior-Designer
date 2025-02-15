import "@/app/global.tw.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`bg-cyan-950 min-h-screen ${openSans.className} flex flex-col items-center w-full`}>
            <body className="bg-zinc-800 text-zinc-100 min-h-screen flex flex-col items-center w-full">
                <header></header>

                {children}

                <footer></footer>
            </body>
        </html>
    );
}