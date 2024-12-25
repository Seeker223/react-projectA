const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children : [
        {
          path: '/',
          element:(
                <Home />
          ),
        },
  
      ]
    },
  ]);

  export default router

