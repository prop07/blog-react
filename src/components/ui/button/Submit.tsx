
interface Props {
  placeholder: string;
}

const Submit = ({placeholder="submit"}: Props) => {
  return (
  <button
  type="submit"
  className="w-full px-4 py-2 rounded-md font-semibold tracking-wide 
             bg-black text-white hover:bg-neutral-800 active:bg-neutral-700 
             dark:bg-white dark:text-black dark:hover:bg-neutral-200 
             transition-colors cursor-pointer"
>
 { placeholder }
</button>)
}

export default Submit