import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import ECommerce from './pages/Dashboard/ECommerce';


import Settings from './pages/Settings';
import Tables from './pages/Tables';
import DefaultLayout from './layout/DefaultLayout';
import AddProduct from './pages/Dashboard/AddProduct';
import ViewProducts from './pages/Dashboard/ViewProducts';
import AddBrand from './pages/Dashboard/AddBrand';
import ViewBrands from './pages/Dashboard/ViewBrands';
import AddCategory from './pages/Dashboard/AddCategory';
import ViewCategories from './pages/Dashboard/ViewCategories';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
        />
       
        <Route
          path="/products/add"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AddProduct />
            </>
          }
        />
        <Route
          path="/products/view"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ViewProducts />
            </>
          }
        />
        <Route
          path="/brands/add"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AddBrand />
            </>
          }
        />
        <Route
          path="/brands/view"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ViewBrands />
            </>
          }
        />
        <Route
          path="/categories/add"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AddCategory />
            </>
          }
        />
        <Route
          path="/categories/view"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ViewCategories />
            </>
          }
        />
      
      
        
       
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
      
       
      </Routes>
    </DefaultLayout>
  );
}

export default App;
