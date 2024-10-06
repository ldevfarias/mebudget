import { Eye, EyeOff } from "lucide-react";
import { Button } from "./button";

type ToggleEyeProps = {
	eyeOn: boolean;
	handleToggle: () => void;
};

export default function ToggleEye({ eyeOn, handleToggle }: ToggleEyeProps) {
	return (
		<Button
			variant="ghost"
			className="border-transparent bg-transparent hover:bg-white ml-2"
			onClick={handleToggle}
		>
			{eyeOn ? (
				<Eye className="h-6 w-6 text-black" />
			) : (
				<EyeOff className="h-6 w-6 text-black" />
			)}
		</Button>
	);
}
