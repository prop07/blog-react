type InputFieldProps = {
  placeholder: string;
  type?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;


const InputField = ({ placeholder, type = "text", error, ...rest }: InputFieldProps) => {
  return (
    <div className="mt-4">
      <input
        type={type}
        placeholder={placeholder}
        className={`p-2 border rounded focus:ring-1 focus:outline-none w-full border-default-border `}
        {...rest}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

export default InputField
