import React from 'react';
import { Printer, Search } from 'lucide-react';
import { ordersData } from '../data/ordersData';

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'processing':
      return 'bg-blue-100 text-blue-800';
    case 'cancel':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const OrdersTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm mt-6">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-medium">Recent Orders</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {ordersData.map((order) => (
              <tr key={order.invoiceNo}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.invoiceNo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.orderTime}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customerName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.method}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{order.amount.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <select 
                    className="rounded border-gray-300"
                    defaultValue={order.status}
                  >
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Cancel</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Printer size={16} />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Search size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-500">
            SHOWING 1-8 OF 425
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded border border-gray-300 text-sm disabled:opacity-50" disabled>
              ‹
            </button>
            <button className="px-3 py-1 rounded bg-emerald-500 text-white text-sm">
              1
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-sm">
              2
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-sm">
              3
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-sm">
              4
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-sm">
              5
            </button>
            <span className="px-3 py-1 text-sm">...</span>
            <button className="px-3 py-1 rounded border border-gray-300 text-sm">
              54
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-sm">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;