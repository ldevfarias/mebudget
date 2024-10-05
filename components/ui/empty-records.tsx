type EmptyRecordsProps = {
	message?: string;
};

const defaultMessage = "Nenhum registro encontrado";
export default function EmptyRecords({
	message = defaultMessage,
}: EmptyRecordsProps) {
	return <div className="text-sm text-gray-500">{message}</div>;
}
