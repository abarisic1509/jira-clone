import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { DottedSeparator } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { loginSchema } from "../schemas";

interface FormData {
	email: string;
	password: string;
}
const SignInCard = () => {
	const form = useForm<FormData>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = (values: FormData): void => {
		console.log("values", values);
	};
	return (
		<Card className="w-full h-full max-w-[25rem] border-none shadow-none">
			<CardHeader className="flex items-center justify-center text-center p-7">
				<CardTitle className="text-2xl">Sign in</CardTitle>
			</CardHeader>
			<div className="px-7">
				<DottedSeparator />
			</div>
			<CardContent className="p-7">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

						<Button disabled={false} size={"lg"} className="w-full">
							Sign in
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
					Don&apos;t have an account?{" "}
					<Link href={"/sign-up"} className="text-blue-500 hover:text-blue-700">
						Register here
					</Link>
				</p>
			</CardContent>
		</Card>
	);
};

export default SignInCard;
