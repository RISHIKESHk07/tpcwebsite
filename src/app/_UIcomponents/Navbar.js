"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import tpcLogo from "../../../public/tpc-logo.svg";

const navigationItems = [
	{ label: "Teams", href: "/teams" },
	{ label: "Projects", href: "/projects" },
	{ label: "Alumni", href: "/alumni" },
	{ label: "Events", href: "/events" },
];

const NavItem = ({ label, href }) => {
	const pathname = usePathname();

	return (
		<div
			className={`group relative text-[#fff] px-5 py-4 
      rounded-full transition-all ease-in-out focus-visible:outline-2 ${
				pathname === href ? "bg-[#333]" : "hover:bg-[#333]"
			}`}
		>
			<Link href={href}>
				<p className="text-lg md:text-base lg:text-lg text-center">{label}</p>
			</Link>
		</div>
	);
};

const Navbar = () => {
	return (
		<>
			<nav className="bg-[#000] sm:z-[2] w-full flex items-center xl:justify-center px-4 pt-8 pb-4">
				<div
					className="hidden bg-[#1a1a1a] xl:flex xl:justify-center xl:items-center 
            px-3 py-2 rounded-full space-x-2 backdrop-blur-xl"
				>
					<div
						className="group relative px-5 py-4 
						rounded-full transition-all ease-in-out"
					>
						<Link href="/">
							<Image src={tpcLogo} alt="TPC Logo" priority />
						</Link>
					</div>

					{navigationItems.map(({ label, href }) => (
						<NavItem key={label} label={label} href={href} />
					))}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
