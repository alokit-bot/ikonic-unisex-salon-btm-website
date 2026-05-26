import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SalonLanding from "@/pages/SalonLanding";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SalonLanding />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
