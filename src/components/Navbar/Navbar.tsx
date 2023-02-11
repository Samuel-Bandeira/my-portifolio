import Button from "./Button";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const navLinks = ["About", "Experience", "Work", "Contact"];
  return (
    // fixed doesn't allow margin auto.
    <div className="text-white text-sm flex justify-between py-[1.5em] px-[5em] w-[100%] fixed">
      <Logo />
      <div className="flex items-center">
        <div className="flex mr-[4.5em]">
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
