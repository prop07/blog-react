
interface Props {
  placeholder: string;
  active?: boolean;
}

const Submit = ({placeholder="submit",active=true}: Props) => {
  return (
  <button
  type="submit"
  className={`w-full px-4 py-2 rounded-md font-semibold tracking-wide transition-colors cursor-pointer text-btn-text bg-btn ${active?'bg-btn':'bg-btn-muted text-text cursor-progress '}`}
>
  {placeholder}
</button>)
}

export default Submit