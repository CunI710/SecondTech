import React from 'react';
import { Outlet } from 'react-router';
import Menu from '../components/Admin/Menu';
import Products from '../components/Admin/CRUD/Products';
const Admin = () => {
  return (
    <div className="flex">
      <div className="flex-[2]">
        <Menu />
      </div>
      <div className="flex-[8]">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
