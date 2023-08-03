import { UserButton } from "@clerk/nextjs";

const DashBoardPage = () => {
    return (<div>
        <UserButton afterSignOutUrl="/"/>
    </div> );
}
 
export default DashBoardPage;