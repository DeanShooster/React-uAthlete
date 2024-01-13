import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Routes";

import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { PrivateGuard } from "./components/PrivateGuard";
import { HomePage } from "./pages/HomePage";
import { AthleteCard } from "./pages/AthleteCard";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { DataPolicy } from "./pages/DataPolicy";
import { Footer } from "./components/Footer";

import "./app.scss";
import { BackgroundBorderLineEffect } from "./components/BackgroundBorderLineEffect";
import { AthleteContextProvider } from "./context/AthleteContext";

function App() {
  return (
    <div className="app">
      <BackgroundBorderLineEffect />
      <BrowserRouter>
        <AthleteContextProvider>
          <Header />
          <Layout>
            <Routes>
              <Route path={routes.Home.path} element={<HomePage />} />
              <Route path={routes.Privacy.path} element={<PrivacyPolicy />} />
              <Route path={routes.DataPolicy.path} element={<DataPolicy />} />
              <Route element={<PrivateGuard />}>
                <Route path={routes.AthleteCard.path} element={<AthleteCard />} />
              </Route>
            </Routes>
          </Layout>
          <Footer />
        </AthleteContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
