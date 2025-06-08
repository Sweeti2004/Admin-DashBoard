import React, { useState } from 'react';


const orderData = [
  { id: 201, product: 'Tablet', quantity: 1, status: 'Delivered', date: '2025-06-06' },
  { id: 202, product: 'Wireless Charger', quantity: 2, status: 'Shipped', date: '2025-06-07' },
  { id: 203, product: 'Gaming Console', quantity: 1, status: 'Processing', date: '2025-06-08' },
  { id: 204, product: 'Webcam', quantity: 3, status: 'Delivered', date: '2025-06-05' },
  { id: 205, product: 'External Hard Drive', quantity: 2, status: 'Shipped', date: '2025-06-04' },
  { id: 206, product: 'Router', quantity: 4, status: 'Processing', date: '2025-06-03' },
  { id: 207, product: 'Printer', quantity: 1, status: 'Delivered', date: '2025-06-02' },
];



function Orders() {
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredOrders = orderData.filter(order =>
    statusFilter === 'All' || order.status === statusFilter
  );

  return (
    <div className='page-container'>
      <h2>Orders</h2>
      <div className="filter">
        <label>Status Filter: </label>
        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option>All</option>
          <option>Processing</option>
          <option>Shipped</option>
          <option>Delivered</option>
        </select>
      </div>
      <table>
        <thead>
          <tr><th>Order ID</th><th>Product</th><th>Quantity</th><th>Status</th><th>Date</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td><span className={`badge badge-${order.status.toLowerCase()}`}>{order.status}</span></td>
              <td>{order.date}</td>
              <td><button onClick={() => alert(`Invoice for order #${order.id}`)}>Invoice</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;