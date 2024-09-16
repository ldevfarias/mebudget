/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dhlOu8AJVYs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<div className="flex min-h-[100dvh] flex-col">
			<section className="w-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] py-12 md:py-24 lg:py-32">
				<div className="container mx-auto px-4 md:px-6">
					<div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
						<div className="space-y-4">
							<h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
								Unleash Your Productivity
							</h1>
							<p className="max-w-[600px] text-lg text-white/90 md:text-xl">
								Our app is designed to help you streamline your workflow and
								achieve your goals with ease.
							</p>
							<div>
								<Link
									href="/dashboard"
									className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-[#6366f1] shadow-md transition-colors hover:bg-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
									prefetch={false}
								>
									Get Started
									<ArrowRightIcon className="ml-2 h-5 w-5" />
								</Link>
							</div>
						</div>
						<div className="flex justify-center">
							<Image
								src="/pexels-pixabay-53621.jpg"
								width={400}
								height={400}
								className="hidden md:block max-w-full rounded-lg shadow-lg"
								alt="Image with calculator device"
								style={{ aspectRatio: "400/400", objectFit: "cover" }}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container mx-auto px-4 md:px-6">
					<div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
						<div className="flex justify-center">
							<img
								src="/pexels-pixabay-53621.jpg"
								width="400"
								height="400"
								alt="Feature Image"
								className="max-w-full rounded-lg shadow-lg"
								style={{ aspectRatio: "400/400", objectFit: "cover" }}
							/>
						</div>
						<div className="space-y-4">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Streamline Your Workflow
							</h2>
							<p className="max-w-[600px] text-muted-foreground md:text-xl">
								Our app provides a suite of powerful features to help you manage
								your tasks, collaborate with your team, and stay on top of your
								projects.
							</p>
							<ul className="grid gap-2 text-muted-foreground">
								<li className="flex items-center gap-2">
									<CheckIcon className="h-5 w-5 text-primary" />
									Intuitive task management
								</li>
								<li className="flex items-center gap-2">
									<CheckIcon className="h-5 w-5 text-primary" />
									Real-time collaboration
								</li>
								<li className="flex items-center gap-2">
									<CheckIcon className="h-5 w-5 text-primary" />
									Powerful analytics and reporting
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
