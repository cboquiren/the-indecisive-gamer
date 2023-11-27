import { Navbar } from "./Pages/navbar";
import { GamesProvider } from "./Providers/GamesProvider";
import { InteractionProvider } from "./Providers/InteractionsProvider";
import { UserProvider } from "./Providers/UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <InteractionProvider>
          <GamesProvider>
            <Navbar></Navbar>
          </GamesProvider>
        </InteractionProvider>
      </UserProvider>
    </>
  );
}

export default App;
