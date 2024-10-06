import { removeCharactersNonNumeric } from "@/lib/utils";

export default function HideValue({ value }: { value: string }) {
	const sanitizeValue = removeCharactersNonNumeric(value);

	return <div>R$ {"*".repeat(sanitizeValue?.length)}</div>;
}
