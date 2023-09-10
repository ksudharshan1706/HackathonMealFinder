import Navbar from "./componants/Navbar/Navbar";
import ViewDishes from "./componants/dish/ViewDishes";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url("https://cutewallpaper.org/27/calming-colors-desktop-wallpaper/1230313718.jpg")`,
        // backgroundColor: "blue",
        height: "100vh",
        backgroundSize: "cover",
        overflow: "auto",
      }}
    >
      <Navbar />
      <ViewDishes />
    </div>
  );
}

export default App;
