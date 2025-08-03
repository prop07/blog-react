
type PageHeaderProps = {
  text: string;
  description?: string;
}

const PageHeader = ({text,description}:PageHeaderProps) => {
  return (
      <div>
        <h1 className=' text-2xl font-semibold tracking-wider'>{text}</h1>
        <p>{description}
</p>
        </div>
  )
}

export default PageHeader