import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import BookingH from "./scenes/bookingh";
import Invoices from "./scenes/invoices";
import BookingD from "./scenes/bookingd";
import Performance_Metric from "./scenes/performance_metric";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Settings from "./scenes/settings";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import SignInAndSingUp from "./scenes/login/SignInAndSingUp";
// import Login from "./scenes/login/Login"

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)

  const check = () => {
    setUserIsLoggedIn(true)
  }

  if (userIsLoggedIn) {
    return (
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Login  */}
        <div className="app">

          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/bookingh" element={<BookingH />} />
              <Route path="/bookingd" element={<BookingD />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div> 
          
      </ThemeProvider>
    </ColorModeContext.Provider>
    )
  }
  else {
    return(
      <SignInAndSingUp loggedIn={() => {check()}}/>
    )
  }
  
}

export default App;
