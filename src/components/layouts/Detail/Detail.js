import React from 'react';
import Header from '../../modules/Header';
import { Outlet } from 'react-router-dom';

const Detail = () => {
  return (
    <main>
      <Header backUrl="/"></Header>
      <Outlet></Outlet>
    </main>
  );
};

export default Detail;
