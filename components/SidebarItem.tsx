import Link from "next/link";
import {IconType} from "react-icons"
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem: React.FC<SidebarItemProps> =(
    {icon: Icon, label, active, href}
) => {
    return (
        <Link href={href} className={twMerge(`
            flex
            flex-row
            h-auto
            items-center
            w-full
            gap-x-4
            text-md
            font-medium
            cusrosr-pointer
            hover:text-white
            transition
            text-neutral-400
            py-1
        `, active && "text-white")}> 
        {/* // only first one is text-white because we have an active prop in the routes in Sidebar.tsx that is true */}
           <Icon size={26}/>
           {/* changes text to icon and it's based on name of route icon in Sidebar */}
           <p className="truncate w-full">{label}</p>
        </Link>
    )
}

export default SidebarItem