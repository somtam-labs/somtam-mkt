import { createHashRouter } from 'react-router-dom';
import App from './App';
import Privacy from './Privacy';

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
]);
