
type ButtonProps = {
    onClick?: () => void;
    icon?: React.ReactNode;
    placeholder?: string;
    className?: string;
};

const Button = ({ onClick, icon, placeholder, className }: ButtonProps) => {
    return (
        <button
            type="button"
            className={`${className} flex items-center gap-1 cursor-pointer p-2 rounded-md   hover:bg-default-hover`}
            onClick={onClick}
        >
            {placeholder && (
                <span className=" tracking-wider text-sm ">
                    {placeholder}
                </span>
            )}
            {icon}
        </button>
    );
};

export default Button;