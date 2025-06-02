import About from "@/componants/About";
import Adds from "@/componants/Adds";
import Book from "@/componants/Book";
import Consultant from "@/componants/Consultant";
import Footer from "@/componants/Footer";
import Home from "@/componants/Home";
import Message from "@/componants/Message";
import Navbar from "@/componants/Navbar";
import Nutrition from "@/componants/Nutrition";
import People from "@/componants/People";
import Solutions from "@/componants/Solutions";
import Work from "@/componants/Work";
export default function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About/>  
      <Adds/>
      <Book/>
      <Solutions/>
      <People/>
      <Nutrition/>
      <Work/>
      <Consultant/>
      <Message/>
      <Footer/>
    </div>
  );
}
