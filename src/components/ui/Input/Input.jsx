function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`py-1 px-2 bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/30 ${className}`}
    />
  );
}

export default Input;