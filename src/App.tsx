import { Navbar } from "./Pages/navbar";
import { GamesProvider } from "./Providers/GamesProvider";
import { InteractionProvider } from "./Providers/InteractionsProvider";
import { UserProvider } from "./Providers/UserProvider";

function App() {
  return (
    <>
      <GamesProvider>
        <UserProvider>
          <InteractionProvider>
            <Navbar></Navbar>
          </InteractionProvider>
        </UserProvider>
      </GamesProvider>
    </>
  );
}

export default App;
