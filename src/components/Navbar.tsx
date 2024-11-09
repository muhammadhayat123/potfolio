
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium">MUHAMMAD</div>
        <ul className="gap-10 lg:gap-16 hidden md:flex">

            <li className="menuLink"><a href="#hero" className="font-bold">Home</a></li>
            <li className="menuLink"><a href="#about" className="font-bold">About</a></li>
            <li className="menuLink"><a href="#project" className="font-bold">Project</a></li>
            <li className="menuLink"><a href="#skills" className="font-bold">Skills</a></li>
            <li className="menuLink"><a href="#contact" className="font-bold">Contact</a></li>

        </ul>

        
          <MdOutlineMenu className="md:hidden" size={30}  />
        
      </div>
    </div>
  );
};

export default Navbar;
