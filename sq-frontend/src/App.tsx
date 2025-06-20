import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import FormPage from "./pages/form-page";
import FormSuccessPage from "./pages/successful-form-page";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path={"/"} element={<HomePage />}></Route>,
            <Route path={"/form"} element={<FormPage />}></Route>,
            <Route path={"/form-successful"} element={<FormSuccessPage />}></Route>,
        ])
    );
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
