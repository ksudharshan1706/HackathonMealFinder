import Navbar from "./componants/Navbar/Navbar";
import ViewDishes from "./componants/dish/ViewDishes";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url("https://static.toiimg.com/photo/92522961.cms")`,
        height: "100%",
      }}
    >
      <Navbar />
      <ViewDishes />
    </div>
  );
}

export default App;
