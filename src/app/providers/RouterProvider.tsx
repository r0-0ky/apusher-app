import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from 'react-router-dom';
import { Layout } from '../layout';
import { KnowledgesPage } from '../../pages/knowledges-page';
import { ArticlePage } from '../../pages/article-page';


const BubbleError = () => {
  const error = useRouteError();
  if (error) throw error;
  return null;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <BubbleError />,
    children: [
      {
        path: 'knowledges',
        element: <KnowledgesPage />,
        errorElement: <BubbleError />,
      },
      {
        path: 'knowledge/:id',
        element: <ArticlePage />,
        errorElement: <BubbleError />,
      },
      {
        path: '*', 
        element: <BubbleError />,
      }
    ]
  },
  {
    path: '*', 
    element: <BubbleError />,
  }
]);

export const BrowserRouter = () => {
  return <RouterProvider router={router} />;
}