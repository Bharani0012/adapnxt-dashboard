import SalesOrdersChart from "./charts/SalesOrdersChart";
import SalesPieChart from "./charts/SalesPieChart";
const DashBoard=()=>{
    return (
        <div className="d-flex flex-column flex-lg-row">
            <SalesOrdersChart/>
            <SalesPieChart/>
        </div>
);
}

export default DashBoard;