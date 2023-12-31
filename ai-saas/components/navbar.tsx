import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
// import SidebarMb from "@/components/sidebarMb";
import dynamic from "next/dynamic";
const SidebarMb = dynamic(() => import('@/components/sidebarMb'), {
    ssr: false
  })

const Navbar = () => {
    return ( 
        <div className="flex items-center p-4">
            <SidebarMb/>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
     );
}
 
export default Navbar;
