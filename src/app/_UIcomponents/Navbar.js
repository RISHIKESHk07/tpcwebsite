"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import tpcLogo from "../../../public/tpc-logo.svg";

const navigationItems = [
	{ label: "Teams", href: "/teams" },
	{ label: "Projects", href: "/projects" },
	{ label: "Alumni", href: "/alumni" },
	{ label: "Events", href: "/events" },
];

const NavItem = ({ label, href, toggleMenu = null }) => {
	const pathname = usePathname();

	return (
		<div
			className={`group relative text-[#fff] px-5 py-4 rounded-2xl
      sm:rounded-full transition-all ease-in-out focus-visible:outline-2 ${
				pathname === href ? "bg-[#1a1a1a] sm:bg-[#333]" : "sm:hover:bg-[#333]"
			}`}
		>
			<Link href={href} onClick={toggleMenu}>
				<p className="text-3xl md:text-base lg:text-lg sm:text-center">
					{label}
				</p>
			</Link>
		</div>
	);
};

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<nav className="bg-[#000] z-[2] w-full flex items-center sm:justify-center px-4 pt-4 sm:pt-8 pb-4">
				<div
					className="hidden bg-[#1a1a1a] sm:flex sm:justify-center sm:items-center 
            px-3 py-2 rounded-full space-x-2 backdrop-blur-xl"
				>
					<div
						className="group relative px-5 py-4 
						transition-all ease-in-out"
					>
						<Link href="/">
							<Image src={tpcLogo} alt="TPC Logo" priority />
						</Link>
					</div>

					{navigationItems.map(({ label, href }) => (
						<NavItem key={label} label={label} href={href} />
					))}
				</div>

				<div className="sm:hidden w-full flex justify-between items-center px-5 py-4">
					<Link href="/">
						<Image src={tpcLogo} alt="TPC Logo" priority />
					</Link>
					<button
						className="text-[#fff] text-4xl"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
					</button>
					<div
						className={`${
							isMenuOpen ? "block" : "hidden"
						} absolute z-[2] top-20 bottom-0 left-0 right-0 sm:hidden w-full`}
					>
						<div className="flex flex-col space-y-4 text-white font-medium py-8 px-4 bg-black">
							<NavItem
								key="Home"
								label="Home"
								href="/"
								toggleMenu={() => setIsMenuOpen(false)}
							/>
							{navigationItems.map(({ label, href }) => (
								<NavItem
									key={label}
									label={label}
									href={href}
									toggleMenu={() => setIsMenuOpen(false)}
								/>
							))}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
