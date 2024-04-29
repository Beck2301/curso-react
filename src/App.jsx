import "./App.css";
import { TitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <div className="App">
      <TitterFollowCard userName="Beck2301" initialIsFollowing={false}> Bryan Escobar</TitterFollowCard>
      <TitterFollowCard userName="hola" initialIsFollowing>Flores Yessi</TitterFollowCard>
    </div>
  );
}
