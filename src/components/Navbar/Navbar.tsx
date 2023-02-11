import Button from "./Button";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const navLinks = ["About", "Experience", "Work", "Contact"];
  return (
    <div className="flex justify-between items-center px-10 py-7 text-white text-sm">
      <Logo />
      <div className="flex items-center space-x-10">
        <div className="flex space-x-6">
          {navLinks.map((link, index) => (
            <NavbarLinks index={index} title={link} />
          ))}
        </div>

        <Button title="Resume" />
      </div>
    </div>
  );
};

export default Navbar;
