import { Button } from "@/components/ui/button";

export default function Home() {
	console.log("test");
	return (
		<div className="w-screen h-screen bg-neutral-100 bg-opacity-15 py-20 px-10 flex gap-4 flex-wrap">
			<Button size={"sm"}>Primary</Button>
			<Button variant={"secondary"}>Secondary</Button>
			<Button variant={"outline"}>Outline</Button>
			<Button variant={"ghost"}>Ghost</Button>
			<Button variant={"muted"}>Muted</Button>
			<Button variant={"destructive"}>Destructive</Button>
			<Button variant={"tetriary"}>Tetriary</Button>
		</div>
	);
}
