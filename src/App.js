import { Route, Routes } from "react-router-dom";
import FeaturedFoodDetails from "./Components/FeaturedFoodDetails";
import FoodDetails from "./Components/FoodDetails";
import Home from "./Components/Home";
import ScrollToTop from "./ScrollToTop";

function App() {
return (
<>
<ScrollToTop>
<Routes>
<Route path='/' element={<Home/>}/>
<Route index element={<Home/>}/>
<Route path="/itemDetails/:id/*" element={<FoodDetails/>}/>
<Route path="/featuredItemDetails/:id/*" element={<FeaturedFoodDetails/>}/>

</Routes>
</ScrollToTop>
</>
);
}

export default App;
