import { Navigate, Route, Routes } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";
import Error404 from "../pages/Error404";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />

      {/* <Route path="/*" element={ <Navigate to="/" /> } />
       */}
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
};
