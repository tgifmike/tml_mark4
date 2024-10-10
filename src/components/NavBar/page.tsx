import { authOptions } from "@/lib/auth";
import { ModeToggle } from "../Theme/ModeToggle";
import Logo from "./Logo";
import { NavDropDown } from "./NavDropDown";

import { getServerSession } from 'next-auth/next';
import { UserAccountNav } from "../Auth/UserAccountNav";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const NavBar = async () => {

    const session = await getServerSession(authOptions);

	return (
		<main className="fixed top-0 inset-x-0 z-[10] bg-accent h-fit p-2">
			<div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
				{/* nav drop down */}
				<NavDropDown />
				{/* Logo */}
				<Logo />
				<div className="flex items-center">
					{/* toggle */}
                    <ModeToggle />
                    
					{session?.user ? (
						<UserAccountNav user={session.user} />
					) : (
						<Link href="/login" className={buttonVariants()}>
							Sign In
						</Link>
					)}
				</div>
			</div>
		</main>
	);
};

export default NavBar;
