import { ReactNode } from "react";
import { SearchInput } from "./UiElements";

export default function MainDashboardLayout({className, children}: {className?: string; children: ReactNode}) {
    return (
        <div className={"flex-1 md:flex-[0.85] lg:flex-[0.8] h-[calc(100vh-20px)] w-full overflow-hidden scroll-smooth "+className}>
            <div className="h-16 w-full flex justify-start items-center gap-2 top-0 p-4 md:pl-4 z-40 bg-[rgba(66,66,66,0.2)] md:bg-transparent">
                <h2 className="logo text-3xl block md:hidden w-full text-center">
                    Vibe
                </h2>
                <SearchInput className="hidden md:flex" />
            </div>
            <div className="px-4 w-full h-[78svh] md:h-[90%] pt-4 flex flex-col gap-8 last:pb-16 md:last:pb-24 overflow-y-auto overflow-x-hidden">
                {children}
            </div>
        </div>
    );
}
