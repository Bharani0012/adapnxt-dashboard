import React, { useEffect, useState } from 'react';
import { BiInfoCircle } from "react-icons/bi";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

const defaultData = [
    { date: '6/30/2024 - 7/6/2024', orders: 4, sales: 1404 },
    { date: '7/7/2024 - 7/13/2024', orders: 2, sales: 800 },
    { date: '7/21/2024 - 7/27/2024', orders: 2, sales: 430 },
];

const SalesOrdersChart = () => {
    const [data, setData] = useState([]);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://my.api.mockaroo.com/orderandsale4.json?key=f6dc6160');
                const fetchedData = await response.json();
                console.log('Fetched Data:', fetchedData);
                const slicedData = fetchedData.slice(10);
                console.log('Sliced Data:', slicedData);
                setData(slicedData);
            } catch (error) {
                setData(defaultData); // Use default data if the Mock API limit is exceeded
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <ResponsiveContainer width="100%" height={400} className='bg-light chart-section'>
            <h6 className='chart-head'>
                Sales vs Orders
                <BiInfoCircle
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    style={{ cursor: 'pointer', marginLeft: 10 }}
                />
                {showTooltip && (
                    <div className="info-tooltip">
                        <p><strong>X-Axis:</strong> Dates</p>
                        <p><strong>Y-Axis (Left):</strong> Sales</p>
                        <p><strong>Y-Axis (Right):</strong> Orders</p>
                    </div>
                )}
            </h6>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 30 }} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis
                    yAxisId="right"
                    orientation="right"
                    domain={[0, 4]}
                />
                <YAxis
                    yAxisId="left"
                    orientation="left"
                    tickFormatter={(value) => `${value / 1000}k`}
                    domain={[0, 1600]}
                />
                <Tooltip
                    formatter={(value, name) => {
                        if (name === "orders") {
                            return [`${value}`, 'Orders'];
                        } else if (name === "sales") {
                            return [`${value}`, 'Sales'];
                        }
                        return null;
                    }}
                    labelFormatter={(label) => `${label}`}
                    content={(props) => {
                        const { payload, label } = props;
                        return (
                            <div className="custom-tooltip">
                                <p>{label}</p>
                                {payload.map((entry, index) => (
                                    <p key={`item-${index}`} style={{ color: entry.color }}>
                                        {entry.name}: {entry.value}
                                    </p>
                                ))}
                                <p style={{ fontWeight: '600' }}>Avg Order Value: 351.00</p>
                            </div>
                        );
                    }}
                />
                <Legend verticalAlign="top" margin={{ bottom: 30 }} />
                <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="orders"
                    stroke="#ff9900"
                    activeDot={{ r: 8 }}
                />
                <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="sales"
                    stroke="#40e0d0"
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default SalesOrdersChart;
