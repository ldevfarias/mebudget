import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LoginButton from "./login-button";

export default function ProductLanding() {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="px-4 lg:px-6 h-16 flex items-center">
				<Link className="flex items-center justify-center" href="#">
					<Wallet className="h-6 w-6" />
					<span className="ml-2 text-xl font-bold">Mebudget</span>
				</Link>
				<nav className="ml-auto flex gap-4 sm:gap-6">
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#features"
					>
						Features
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#gallery"
					>
						Gallery
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#pricing"
					>
						Pricing
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#contact"
					>
						Contact
					</Link>
				</nav>
			</header>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-black to-indigo-700">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
										Experience Clarity Like Never Before
									</h1>
									<p className="max-w-[600px] text-gray-200 md:text-xl">
										Introducing ScreenMaster, the revolutionary display that
										transforms your viewing experience. Crisp, vibrant, and
										energy-efficient.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<LoginButton />
								</div>
							</div>
							<div className="flex items-center justify-center">
								<Image
									alt="ScreenMaster Display"
									className="aspect-video overflow-hidden rounded-xl object-cover object-center"
									height="400"
									src="/placeholder.svg"
									width="600"
								/>
							</div>
						</div>
					</div>
				</section>
				<section
					id="features"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
				>
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
							Unparalleled Features
						</h2>
						<div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
							<div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg shadow-sm bg-white">
								<div className="p-2 bg-black rounded-full">
									<CheckCircle className="h-6 w-6 text-white" />
								</div>
								<h3 className="text-xl font-bold text-center">4K Ultra HD</h3>
								<p className="text-sm text-gray-500 text-center">
									Experience stunning clarity and detail with our 4K Ultra HD
									resolution.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg shadow-sm bg-white">
								<div className="p-2 bg-purple-100 rounded-full">
									<CheckCircle className="h-6 w-6 text-purple-600" />
								</div>
								<h3 className="text-xl font-bold text-center">
									HDR Technology
								</h3>
								<p className="text-sm text-gray-500 text-center">
									Enjoy vibrant colors and deep contrasts with our advanced HDR
									technology.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg shadow-sm bg-white">
								<div className="p-2 bg-purple-100 rounded-full">
									<CheckCircle className="h-6 w-6 text-purple-600" />
								</div>
								<h3 className="text-xl font-bold text-center">
									Energy Efficient
								</h3>
								<p className="text-sm text-gray-500 text-center">
									Save on energy costs with our eco-friendly, power-saving
									design.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
							Product Gallery
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<Image
								alt="ScreenMaster Front View"
								className="aspect-video overflow-hidden rounded-xl object-cover object-center"
								height="300"
								src="/placeholder.svg"
								width="400"
							/>
							<Image
								alt="ScreenMaster Side View"
								className="aspect-video overflow-hidden rounded-xl object-cover object-center"
								height="300"
								src="/placeholder.svg"
								width="400"
							/>
							<Image
								alt="ScreenMaster in Living Room"
								className="aspect-video overflow-hidden rounded-xl object-cover object-center"
								height="300"
								src="/placeholder.svg"
								width="400"
							/>
						</div>
					</div>
				</section>
				<section
					id="pricing"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
				>
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
							Choose Your Perfect Screen
						</h2>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							<div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
								<h3 className="text-2xl font-bold text-center mb-4">Basic</h3>
								<p className="text-4xl font-bold text-center mb-4">$499</p>
								<ul className="mb-6 space-y-2">
									<li className="flex items-center">
										<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
										Display
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
										1080p Full HD
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
										60Hz Refresh Rate
									</li>
								</ul>
								<Button className="mt-auto">Buy Now</Button>
							</div>
							<div className="flex flex-col p-6 bg-purple-600 rounded-lg shadow-lg text-white">
								<h3 className="text-2xl font-bold text-center mb-4">Pro</h3>
								<p className="text-4xl font-bold text-center mb-4">$799</p>
								<ul className="mb-6 space-y-2">
									<li className="flex items-center">
										<CheckCircle className="h-5 w-5 text-white mr-2" />
										Display
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-5 w-5 text-white mr-2" />
										4K Ultra HD
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-5 w-5 text-white mr-2" />
										120Hz Refresh Rate
									</li>
								</ul>
								<Button className="mt-auto bg-white text-purple-600 hover:bg-gray-100">
									Buy Now
								</Button>
							</div>
							<div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
								<h3 className="text-2xl font-bold text-center mb-4">Elite</h3>
								<p className="text-4xl font-bold text-center mb-4">$1299</p>
								<ul className="mb-6 space-y-2">
									<li className="flex items-center">
										<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
										Display
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
										8K Resolution
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
										240Hz Refresh Rate
									</li>
								</ul>
								<Button className="mt-auto">Buy Now</Button>
							</div>
						</div>
					</div>
				</section>
				<section id="contact" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Ready to Transform Your Viewing Experience?
								</h2>
								<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Join thousands of satisfied customers who have already
									upgraded to ScreenMaster. Get in touch with us today!
								</p>
							</div>
							<div className="w-full max-w-sm space-y-2">
								<form className="flex flex-col gap-2">
									<Input
										className="max-w-lg"
										placeholder="Enter your email"
										type="email"
									/>
									<Button
										type="submit"
										className="bg-purple-600 text-white hover:bg-purple-700"
									>
										Contact Sales
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</form>
								<p className="text-xs text-gray-500">
									By submitting, you agree to our Terms of Service and Privacy
									Policy.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500">
					© 2024 ScreenMaster Inc. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link className="text-xs hover:underline underline-offset-4" href="#">
						Terms of Service
					</Link>
					<Link className="text-xs hover:underline underline-offset-4" href="#">
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	);
}
