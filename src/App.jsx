import { Routes, Route } from "react-router-dom";
import { UserPage } from "./UserPage";

export default function App() {
  return (
    <div>
      <UserPage />
      <Routes>
        <Route path="/users/:username" element={<UserPage />} />
      </Routes>
    </div>
  );
}
