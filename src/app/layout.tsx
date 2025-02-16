import "@/app/global.tw.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`bg-cyan-950 h-screen overflow-hidden ${openSans.className} flex flex-col items-center w-full`}>
            <body className="bg-zinc-800 text-zinc-100 h-screen overflow-hidden flex flex-col items-center w-full">
                <header></header>

                {children}

                <footer></footer>
            </body>
        </html>
    );
}