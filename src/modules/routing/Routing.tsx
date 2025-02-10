import { Route, Routes } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { PageWrapper } from "@/components/pageWrapper";
import { Protected } from "@/components/protectedRoutes";
import { Profile } from "@/pages/Profile";

function Routing() {
  return (
    <Routes>
      <Route element={<PageWrapper />}>
        <Route index path="/" element={<HomePage />} />
        <Route element={<Protected />}>
          <Route index path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Routing;
