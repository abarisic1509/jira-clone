import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getAppUrl() {
	const url = process.env.NEXT_PUBLIC_APP_URL;

	if (!url) {
		throw new Error("App url not defined!");
	}

	return url;
}
