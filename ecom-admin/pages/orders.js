import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Head from "@/components/Heading";
import StyledTable from "@/components/Table";


export default function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("/api/handleOrders").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <Layout>
      <Head>Orders</Head>
      <StyledTable>
        <thead>
          <tr>
            <th>Date</th>
            <th>Paid</th>
            <th>Recipient</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
                <td className={order.paid ? "text-green" : "text-red"}>
                  {order.paid ? "YES" : "NO"}
                </td>
                <td>
                  {order.name}
                  <br />
                  {order.email}
                  <br />
                  {order.streetAddress}
                  <br />
                  {order.city} {order.postalCode} {order.country}
                </td>
                <td>
                  {order.line_items.map((l) => (
                    <React.Fragment key={l.id}>
                      {l.price_data?.product_data.name} x{l.quantity}
                      <br />
                    </React.Fragment>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </Layout>
  );
}
