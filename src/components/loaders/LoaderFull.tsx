import { Loader } from "../ui/loader";

const LoaderFull = () => {
  return (
    <div className="h-screen w-screen bg-white dark:bg-black fixed top-0 left-0 flex items-center justify-center">
      <Loader variant="circular" className="scale-200" />
    </div>
  );
};

export default LoaderFull;
