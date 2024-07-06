import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from 'react-router-dom';
import { Layout } from '../layout';
import { KnowledgesPage } from '../../pages/knowledges-page';
import { ArticlePage } from '../../pages/article-page';
import { SubscriptionsPage } from '../../pages/subscriptions-page';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import avatarIcon from '../assets/images/avatar.png';
import React from 'react';
import { NotFoundPage } from '../../pages/not-found-page';


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
        path: 'subscriptions',
        element: <SubscriptionsPage />,
        errorElement: <BubbleError />,
      },
      {
        path: '*', 
        element: <NotFoundPage />,
      },
      {
        path: '', 
        element: <NotFoundPage />,
      }
    ]
  },
  {
    path: '*', 
    element: <NotFoundPage />,
  }
]);

export const BrowserRouter = () => {
  const [currentUser] = React.useState({
    balance: 30.25,
    avatar: avatarIcon,
  })
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <RouterProvider router={router} />
    </CurrentUserContext.Provider>
  )
}