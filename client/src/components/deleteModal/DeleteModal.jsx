const ConfirmModal = ({ isOpen, onClose, onConfirm, title }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm">
          <h3 className="text-lg font-semibold mb-4">{title || "Are you sure?"}</h3>
          <div className="flex justify-end space-x-3">
            <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
            <button onClick={onConfirm} className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700">Delete</button>
          </div>
        </div>
      </div>
    );
  };
  
export default ConfirmModal;
  