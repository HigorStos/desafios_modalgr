import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Cryptography from './pages/Cryptography';
import Birthday from './pages/Birthday';
import Loan from './pages/Loan';
import { GlobalStyle } from './styles';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/cryptography',
    element: <Cryptography />
  },
  {
    path: '/birthday',
    element: <Birthday />
  },
  {
    path: '/loan',
    element: <Loan />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
