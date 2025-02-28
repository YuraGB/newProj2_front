import { Route, Routes } from "react-router";
import { PageWrapper } from "../pageWrapper";
import { lazy, Suspense } from "react";
import { AuthPageWrapper } from "@/components/authPageWrapper/AuthPageWrapper.tsx";

const HomePage = lazy(() => import("@/pages/HomePage"));
const LoginPage = lazy(() => import("@/pages/Login"));
const RegisterPage = lazy(() => import("@/pages/Registration"));
const ProfilePage = lazy(() => import("@/pages/Profile"));

function Routing() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PageWrapper />}>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/profile" element={<ProfilePage />} />
        </Route>
        <Route element={<PageWrapper mainClasses={"navigation_animation"} />}>
          <Route element={<AuthPageWrapper />}>
            <Route path={"login"} element={<LoginPage />} />
            <Route path={"registration"} element={<RegisterPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Routing;
