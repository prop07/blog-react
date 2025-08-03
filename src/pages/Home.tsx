import useLoading from "@/hooks/useLoading";

const Home = () => {
  const { isLoading, setLoading } = useLoading();

  const startProcess = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // simulate loading
  };

  return (
    <div className="mt-20">
      Home
      <div>
      {isLoading ? <p>Loading...</p>: <p>Content loaded</p>}
      <button onClick={startProcess}>Trigger Loading</button>
    </div>
    </div>
  );
};

export default Home;
