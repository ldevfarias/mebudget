export default function HideValue({ value }: { value: string }) {
	return <div>R$ {"*".repeat(value.length)}</div>;
}
