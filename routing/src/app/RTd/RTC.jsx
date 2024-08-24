import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = [
  {
    path: "/",
    element: <Home />,
  },
];

root.render(<RouterProvider router={router} />);
