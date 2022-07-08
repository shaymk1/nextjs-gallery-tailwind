import { useState } from "react";
import Link from "next/link";
import pomegranate from '/public/pomegranate.png'
import {
	FaBars,
	FaFacebook,
	FaInstagramSquare,
	FaTimes,
	FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	return (
		<nav className="w-full bg-[#132a13] ">
			<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
				<div>
					<div className="flex items-center justify-between py-3 md:py-5 md:block">
						<a href="javascript:void(0)">
							<h2 className="text-2xl font-bold font-higelak text-[#ffd400]">
								f
							</h2>
						</a>
						<div className="md:hidden">
							<button
								className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
								onClick={() => setNavbar(!navbar)}>
								{navbar ? (
									<FaTimes
										size={30}
										className="text-white hover:text-[#ffd400]"
									/>
								) : (
									<FaBars
										size={30}
										className="text-white hover:text-[#ffd400]"
									/>
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							navbar ? "block" : "hidden"
						}`}>
						<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
							<li className="text-white hover:text-[#ffd400]">
								<a href="javascript:void(0)">Home</a>
							</li>

							<li className="text-white hover:text-[#ffd400]">
								<a href="javascript:void(0)">About </a>
							</li>
							<li className="text-white hover:text-[#ffd400]">
								<a href="javascript:void(0)">Gallery</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
