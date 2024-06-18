import React from "react";

interface CustomAlertProps {
	message: string;
	onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, onClose }) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
				<h2 className="text-lg font-semibold mb-4">Error</h2>
				<p className="mb-4">{message}</p>
				<button
					className="bg-red-500 text-white px-4 py-2 rounded"
					onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
};

export default CustomAlert;
