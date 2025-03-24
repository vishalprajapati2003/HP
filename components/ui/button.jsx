export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-indigo-600 text-white rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
