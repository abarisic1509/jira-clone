"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	const pathname = usePathname();
	return (
		<main className="bg-neutral-100 min-h-screen">
			<div className="max-w-screen-2xl mx-auto p-4">
				<nav className="flex justify-between items-center">
					<Image src={"/logo.svg"} width={153} height={38} alt="Logo" />

					<Button asChild variant="secondary">
						<Link href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}>
							{pathname === "/sign-in" ? "Sign up" : "Login"}
						</Link>
					</Button>
				</nav>
				<div className="flex flex-col items-center justify-center pt-4 md:pt-14">
					{children}
				</div>
			</div>
		</main>
	);
};

export default AuthLayout;
