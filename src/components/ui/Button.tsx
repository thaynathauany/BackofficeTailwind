"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClass =
    variant === "primary"
      ? "bg-purple text-white hover:bg-purple/90 focus:ring-purple"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300";

  return (
    <button {...props} className={`${base} ${variantClass} ${className}`}>
      {props.children}
    </button>
  );
}
