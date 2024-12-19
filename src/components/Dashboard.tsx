import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ShoppingCart, RefreshCcw, Truck, CheckCircle } from 'lucide-react';
import OrdersTable from './OrdersTable';

const salesData = [
  { date: '2024-11-19', value: 250 },
  { date: '2024-11-21', value: 550 },
];

const bestSellingData = [
  { name: 'Yellow Sweet Corn', value: 40 },
  { name: 'Organic Baby Carrot', value: 30 },
  { name: 'Mint', value: 15 },
  { name: 'Calabaza Squash', value: 15 },
];

const COLORS = ['#10B981', '#3B82F6', '#F97316', '#06B6D4'];

const StatsCard = ({ title, value, breakdown }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
    <p className="text-3xl font-bold mt-2">{value}</p>
    {breakdown && (
      <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
        {Object.entries(breakdown).map(([key, value]) => (
          <div key={key}>
            <p className="text-gray-600">{key}</p>
            <p className="font-medium">{value}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

const Dashboard = () => {
  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <StatsCard
          title="Today Orders"
          value="₹0.00"
          breakdown={{
            'Cash': '₹0.00',
            'Card': '₹0.00',
            'Credit': '₹0.00'
          }}
        />
        <StatsCard
          title="Yesterday Orders"
          value="₹0.00"
          breakdown={{
            'Cash': '₹0.00',
            'Card': '₹0.00',
            'Credit': '₹0.00'
          }}
        />
        <StatsCard
          title="This Month"
          value="₹7827.17"
        />
        <StatsCard
          title="Last Month"
          value="₹16155.03"
        />
        <StatsCard
          title="All-Time Sales"
          value="₹286674.50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
              <ShoppingCart className="text-orange-500" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Total Order</p>
              <p className="text-2xl font-bold">425</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
              <RefreshCcw className="text-blue-500" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Orders Pending</p>
              <p className="text-2xl font-bold">116</p>
              <p className="text-red-500 text-sm">₹60767.14</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
              <Truck className="text-emerald-500" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Orders Processing</p>
              <p className="text-2xl font-bold">54</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
              <CheckCircle className="text-purple-500" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Orders Delivered</p>
              <p className="text-2xl font-bold">208</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Weekly Sales</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Best Selling Products</h2>
          <div className="h-64 flex flex-col md:flex-row items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={bestSellingData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {bestSellingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 md:mt-0 md:ml-8">
              {bestSellingData.map((item, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <OrdersTable />
    </main>
  );
};

export default Dashboard;