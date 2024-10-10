import Link from "next/link";
import { UserAccountNav } from "../Login/UserAccountNav";
import { ModeToggle } from "../Theme/ModeToggle";
import Logo from "./Logo";
import { NavDropDown } from "./NavDropDown";
import { buttonVariants } from "../ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";

const NavBar = async () => {

    const session = await getServerSession(authOptions);

	return (
		<main className="fixed top-0 inset-x-0 z-[10] bg-accent h-fit py-2">
			<div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
				{/* nav drop down */}
				<NavDropDown />
				{/* Logo */}
				<Logo />
				{/* toggle */}
				<div className="flex pr-4">
					<ModeToggle />
					{session?.user ? (
						<UserAccountNav user={session.user} />
					) : (
						<Link href="/login" className={buttonVariants()}>
							Sign In
						</Link>
					)}
				</div>

				{/* Avatar */}
			</div>
		</main>
	);
};

export default NavBar;
