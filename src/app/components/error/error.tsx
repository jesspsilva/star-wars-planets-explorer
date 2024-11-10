import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function Error({
  title = "Something went wrong",
  description = "We encountered an issue while processing your request. Please try again later or check your connection.",
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="text-center p-6 rounded-lg bg-red-50 max-w-md mx-auto">
        <div className="flex justify-center">
          <ExclamationTriangleIcon
            className="h-12 w-12 text-red-500"
            data-testid="error-icon"
          />
        </div>
        <h2 className="mt-4 text-lg font-semibold text-gray-900">{title}</h2>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
