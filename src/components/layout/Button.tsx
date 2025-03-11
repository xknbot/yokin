'use client'

// Define type for props
interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "third" | "fourth";
  disabled?: boolean;
  onClick?: () => void; // Changed from string to function
  className?: string;
  type?: "button" | "submit" | "reset";
}

// Component Button
export default function Button({
  label,
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles = "px-8 py-1 rounded text-[14px] border border-transparent";
  const variantStyles = {
    primary:
      "bg-white text-black hover:text-white hover:bg-transparent hover:border hover:border-white hover:cursor-pointer transition duration-600 ease-in-out",
    secondary:
      "bg-gradient-to-r from-[#CDFEBC] to-[#FFE3FC] text-black hover:from-[#b3fd9b] hover:to-[#ffccfa] hover:cursor-pointer transition duration-600 ease-in-out",
    third:
      "h-[48px] p-10 bg-white text-black hover:bg-gradient-to-r hover:from-[#b3fd9b] hover:to-[#ffccfa] hover:cursor-pointer transition duration-600 ease-in-out",
    fourth:
      "bg-[#1E1E1E] text-[#767676] py-[10px] px-[69px] rounded text-[14px] hover:bg-white hover:text-black transition duration-600 ease-in-out hover:cursor-pointer",
  };

  const classNameFinal = `${baseStyles} ${variantStyles[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`.trim();

  return (
    <button
      className={classNameFinal}
      disabled={disabled}
      onClick={onClick} // Properly typed onClick
      type={type}
    >
      {label}
    </button>
  );
}