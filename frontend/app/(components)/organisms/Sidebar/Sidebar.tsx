import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {
    const [showProjects, setShowProjects] = useState(true);
    const [showPriority, setShowPriority] = useState(true);

const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white`
    return(
        <aside className={sidebarClassNames}>
            <nav className="flex h-[100%] w-full flex-col justify-start">

                <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                    <div className="text-xl font-bold text-gray-800 dark:text-white">
                        RodTasks
                    </div>
                </div>

                <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700 ">
                        <Image src="/logo.png" alt="logo" width={40} height={40} />
                        <div className="text-xl font-bold text-gray-800 dark:text-white">
                            RodTasks
                        </div>
                </div>
                
            </nav>
        </aside>
    )
}

export default Sidebar;