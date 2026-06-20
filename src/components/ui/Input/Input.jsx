function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 ${className}`}
    />
  );
}

export default Input;