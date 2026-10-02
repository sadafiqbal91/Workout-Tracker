import ShoppingTracker from "./components/ShoppingTracker";

function App() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.35),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.28),_transparent_28%),linear-gradient(135deg,_#fff7ed_0%,_#fdf2f8_25%,_#eef2ff_50%,_#ecfeff_100%)] px-4 py-10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />
        <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-pink-400/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-blue-400/25 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-teal-300/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        <ShoppingTracker />
      </div>
    </main>
  );
}

export default App;
