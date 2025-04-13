import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { PageWrapper } from "../pageWrapper";
import { lazy } from "react";
import { AuthPageWrapper } from "@/components/authPageWrapper/AuthPageWrapper.tsx";
import { prefetchUserData } from "@/modules/api/userApi/fetchUserData.ts";

const HomePage = lazy(() => import("@/pages/HomePage"));
const LoginPage = lazy(() => import("@/pages/Login"));
const RegisterPage = lazy(() => import("@/pages/Registration"));
const ProfilePage = lazy(() => import("@/pages/Profile"));
const ProductPage = lazy(() => import("@/pages/Product"));
const Checkout = lazy(() => import("@/pages/Checkout"));
const OrderSuccessPage = lazy(() => import("@/pages/OrderSuccess"));
const Category = lazy(() => import("@/pages/Category"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PageWrapper />} loader={prefetchUserData}>
      <Route index path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success/:orderId" element={<OrderSuccessPage />} />
      <Route path="/category/:categoryName" element={<Category />} />

      <Route element={<PageWrapper mainClasses={"navigation_animation"} />}>
        <Route element={<AuthPageWrapper />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegisterPage />} />
        </Route>
      </Route>
    </Route>,
  ),
);

export default router;
