import { HStack, Flex } from "@chakra-ui/react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/backOffice/DashboardPage";
import Sidebar from "./components/Sidebar";
import FlightReservation from "./pages/backOffice/FlightReservation";
import NotFound from "./pages/NotFound";
import HotelReservation from "./pages/backOffice/HotelReservation";
import Packages from "./pages/backOffice/Packages";
import ViewReservation from "./pages/backOffice/ViewReservation";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<SidebarLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/flight-reservations" element={<FlightReservation />} />
          <Route path="/hotel-reservations" element={<HotelReservation />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/view-reservations/:id" element={<ViewReservation />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const SidebarLayout = () => {
  return (
    <div className="App">
      <HStack w="full" h="100vh" bg="gray.100" padding={10}>
        <Sidebar />
        <Flex
          as="main"
          minW="80%"
          h="full"
          bg="white"
          alignItems="center"
          flexDirection="column"
          position="relative"
          borderRadius="3xl"
          p={6}
        >
          <Outlet />
        </Flex>
      </HStack>
    </div>
  );
};

export default App;
