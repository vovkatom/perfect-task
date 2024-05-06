import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
//import SideBar from '../SideBar/SideBar';

const SharedLayout = () => {
  return (
    <>
      {/* <SideBar /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
