import { AppContextProvider, useAppContext } from "./core/context";
import { AppRoutes } from "./routes";

function App() {
  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  )
}

export default App
