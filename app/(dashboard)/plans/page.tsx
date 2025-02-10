import { Algorithm } from "@/components/shared/Algorithm";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { Plans } from "@/components/shared/plans";
import Sidebar from "@/components/shared/Sidebar";

export default function Dashboard() {
    return (
        <>
            <div className="flex flex-row h-screen">
                {/* Sidebar: Static and non-scrollable */}
                <div className="flex-shrink-0">
                    <Sidebar />
                </div>
                <div className="flex flex-col w-full h-full">
                    {/* Dashboard Navbar: Static and non-scrollable */}
                    <DashboardNavbar />
                    {/* Details Section: Scrollable */}
                    <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
                        <Plans />
                    </div>
                </div>
            </div>
        </>
    );
}
