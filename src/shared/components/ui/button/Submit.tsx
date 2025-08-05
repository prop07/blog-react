import useLoading from "@/shared/hooks/useLoading";

interface Props {
  placeholder?: string;
}

const Submit = ({ placeholder = "Submit" }: Props) => {
  const { isLoading } = useLoading();
  return (
    <button
      disabled={isLoading}
      type="submit"
      className={`w-full px-4 py-2 rounded-md font-semibold tracking-wide transition-colors cursor-pointer text-btn-text bg-btn ${isLoading ? 'bg-btn-muted text-gray-400 cursor-progress ' : 'bg-btn text-btn-text'}`}
    >
      {placeholder}
    </button>)
}

export default Submit