"use client"

import { Button } from "@/components/ui/button";
import {Menu} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

const SidebarMb = ():React.JSX.Element => {
    return ( 
        <Sheet>
            <SheetTrigger>
                <Button variant={"ghost"} size={"icon"} className="md:hidden">
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side = "left" className="p-0">
                <Sidebar/>
            </SheetContent>
        </Sheet>
     );
}
 
export default SidebarMb;