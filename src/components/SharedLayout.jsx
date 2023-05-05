import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const SharedLayout = () => {
    
    return    <>
      <div>
        <Header />
      </div>
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
}