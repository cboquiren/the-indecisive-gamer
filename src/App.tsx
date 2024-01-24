import { Routes, Route } from "react-router";
import { Navbar } from "./Pages/navbar";
import { GamesProvider } from "./Providers/GamesProvider";
import { InteractionProvider } from "./Providers/InteractionsProvider";
import { UserProvider } from "./Providers/UserProvider";
import { Homepage } from "./Pages/home";
import { SuggestionPage } from "./Pages/suggestion";
import { Highlight } from "./Pages/highlight";
import { Lobby } from "./Pages/lobby";
import { UserPage } from "./Pages/user";

function App() {
  return (
    <>
      <UserProvider>
        <InteractionProvider>
          <GamesProvider>
            <Navbar />
            <div>
              <Routes>
                <Route path="home" element={<Homepage />}></Route>
                <Route path="lobby" element={<Lobby />}></Route>
                <Route path="suggestion" element={<SuggestionPage />}></Route>
                <Route path="try-this" element={<Highlight />}></Route>
                <Route path="userPage" element={<UserPage />}></Route>
              </Routes>
            </div>
          </GamesProvider>
        </InteractionProvider>
      </UserProvider>
    </>
  );
}

export default App;
