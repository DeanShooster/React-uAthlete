import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Routes";

import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./components/Layout";
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
            </Routes>
          </Layout>
          <Footer />
        </AthleteContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
