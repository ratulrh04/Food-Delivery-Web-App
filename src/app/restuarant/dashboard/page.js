import RestaurantHeader from "@/app/_components/RestuarantHeader";
import "./../style.css"

const Dashboard = () => {
    return (
        <div>
            {/* Restuarant Navbar import here */}
            <RestaurantHeader/>
            <h1>Welcome to dashboard</h1>
        </div>
    );
};

export default Dashboard;