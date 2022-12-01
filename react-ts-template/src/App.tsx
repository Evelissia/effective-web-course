import { FC } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Outlet, RouteObject, useRoutes } from 'react-router-dom';
import { Grid, Container, Paper } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

/*Header and Footer*/
import Header from './components/Header/index';
import Footer from './components/Footer/index';

/*pages*/
import Characters from './pages/Characters/index';
import Comics from './pages/Comics/index';
import Series from './pages/Series/index';


const App = () => {
  /*const routes: RouteObject[] = [
    {
      path: '/',
      element: <Outlet />,
      children: [
        { index: true, element: <Characters /> },
        {
          path: '/comics',
          element: <Comics />
        },
        {
          path: '/series',
          element: <Series />
        },
        { path: '*', element: <Characters /> }
      ]
    }
  ];
  
  const routesElement = useRoutes(routes);*/


  return (
    <div>
      <Header />
      <Series />
    </div>
  );
};

export default App;
