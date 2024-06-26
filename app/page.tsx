import Hero from "./components/Hero";
import RecentProjects from "./components/RecentProjects";
import Footer from "./components/Footer";
import { FloatingNav } from "./components/ui/FloatingNav";
import { IoHomeOutline } from "react-icons/io5";
 
export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center 
     flex-col overflow-hidden mx-auto sm:px-10 px-5 "
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: "home", link: './',icon: <IoHomeOutline/> }
        ]}/>
        <Hero />
        <RecentProjects />
        <Footer/>
      </div>
    </main>
  );
}
