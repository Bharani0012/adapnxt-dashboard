import React, { useState } from 'react';
import { BiInfoCircle } from "react-icons/bi";
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const data = [
    { name: 'WooCommerce Store', value: 55.8 },
    { name: 'Shopify Store', value: 44.2 }
];

const COLORS = ['#FF6B6B', '#40E0D0'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(1)}%`}
        </text>
    );
};

const SalesPieChart = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    return (
        <div className='bg-light chart-section'>
            <h6 className='chart-head'>
                Sales Portion
                <BiInfoCircle
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    style={{ cursor: 'pointer', marginLeft: 10 }}
                />
                {showTooltip && (
                    <div className="info-tooltip">
                        <p><strong>This Pie Chart Compares Sales on WooCommerceStore vs Shopify</strong></p>
                    </div>
                )}
            </h6>
            <PieChart width={300} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    startAngle={90}
                    endAngle={-270}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    formatter={(value) => (
                        <span style={{ fontSize: 14, color: '#000000' }}>{value}</span>
                    )}
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={30}
                    fontWeight="bold"
                >
                    2659
                </text>
                <text
                    x="50%"
                    y="45%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={16}
                    fontWeight="bold"
                >
                    Total
                </text>
            </PieChart>
        </div>
    );
};

export default SalesPieChart;
