
// Define type for props
interface ButtonProps {
    label: string;
    variant?: "primary" | "secondary" | "third" | 'fourth';
    disabled?: boolean;
}

// Component Button
export default function Button({ label, variant = "primary", disabled = false, ...props }: ButtonProps) {
    const baseStyles = "px-8 py-1 rounded text-[14px]";
    const variantStyles = {
        primary: "bg-white text-black hover:text-white hover:bg-transparent hover:border hover:border-white hover:cursor-pointer transition duration-600 ease-in-out ",
        secondary: "bg-linear-to-r text-black from-[#CDFEBC] to-[#FFE3FC] hover:from-[#b3fd9b] hover:to-[#ffccfa] hover:cursor-pointer transition duration-600 ease-in-out",
        third: "h-[48px] p-10 bg-white text-black hover:bg-linear-to-r hover:from-[#b3fd9b] hover:to-[#ffccfa] hover:cursor-pointer transition duration-600 ease-in-out",
        fourth: 'bg-[#1E1E1E] text-[#767676] py-[10px] px-[69px] rounded text-[14px] hover:bg-white hover:text-black transition duration-600 ease-in-out hover:cursor-pointer'
    };

    const className = `${baseStyles} ${variantStyles[variant]} ${ disabled ? "opacity-50 cursor-not-allowed" : ""}`;
    
    return (
        <button className={className} disabled={disabled} {...props}> 
            {label} 

        </button>            

    );
}