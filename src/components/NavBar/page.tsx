import { ModeToggle } from "../Theme/ModeToggle";
import Logo from "./Logo";
import { NavDropDown } from "./NavDropDown";

const NavBar = () => {
	return (
		<main className="fixed top-0 inset-x-0 z-[10] bg-accent h-fit py-2">
            <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
             
                {/* nav drop down */}
                <NavDropDown />
                {/* Logo */}
                <Logo />
                {/* toggle */}
                <ModeToggle />
                {/* Avatar */}
            </div>
		</main>
	);
};

export default NavBar;
