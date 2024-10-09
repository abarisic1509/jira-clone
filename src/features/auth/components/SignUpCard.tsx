import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { DottedSeparator } from "@/components";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";

interface FormData {
	fullName: string;
	email: string;
	password: string;
	repeatPassword: string;
}

const formSchema = z.object({
	fullName: z.string().trim().min(1, "Required"),
	email: z.string().email(),
	password: z.string().min(8, "Min 8 characters").max(24, "Max 24 characters"),
	repeatPassword: z.string(),
});

const SignUpCard = () => {
	const form = useForm<FormData>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (values: FormData): void => {
		console.log("values", values);
	};
	return (
		<Card className="w-full h-full max-w-[25rem] border-none shadow-none">
			<CardHeader className="flex items-center justify-center text-center p-7">
				<CardTitle className="text-2xl">Sign up</CardTitle>
				<CardDescription>
					By signing up, you agree to our{" "}
					<Link href={"/"}>
						<span className=" text-blue-500 hover:text-blue-700">
							Privacy policy
						</span>
					</Link>{" "}
					and{" "}
					<Link href={"/"}>
						<span className=" text-blue-500 hover:text-blue-700">
							Terms of use
						</span>
					</Link>
				</CardDescription>
			</CardHeader>
			<div className="px-7">
				<DottedSeparator />
			</div>
			<CardContent className="p-7">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							name="fullName"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type="text"
											placeholder="Enter your full name"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="email"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type="email"
											placeholder="Enter your email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="password"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type="password"
											placeholder="Enter your password"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="repeatPassword"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type="password"
											placeholder="Repeat password"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button disabled={false} size={"lg"} className="w-full">
							Sign up
						</Button>
					</form>
				</Form>
			</CardContent>
			<div className="px-7 flex items-center gap-4">
				<DottedSeparator />
				<p className="text-neutral-400">OR</p>
				<DottedSeparator />
			</div>
			<CardContent className="p-7 flex flex-col gap-y-4">
				<Button
					variant={"secondary"}
					size={"lg"}
					className="w-full flex items-center gap-3"
				>
					<FcGoogle className="size-5" />
					Continue with Google
				</Button>
				<Button
					variant={"secondary"}
					size={"lg"}
					className="w-full flex items-center gap-3"
				>
					<FaGithub className="size-5" />
					Continue with Github
				</Button>
			</CardContent>
			<div className="px-7">
				<DottedSeparator />
			</div>
			<CardContent className="p-7 flex items-center justify-center">
				<p>
					Already have an account?{" "}
					<Link href={"/sign-in"} className="text-blue-500 hover:text-blue-700">
						Login
					</Link>
				</p>
			</CardContent>
		</Card>
	);
};

export default SignUpCard;
