import { formatToBRL, parseBRLToNumber } from "@/lib/utils";

export default function ShowValue({ value }: { value: string }) {
	return <div>{formatToBRL(parseBRLToNumber(value))}</div>;
}
