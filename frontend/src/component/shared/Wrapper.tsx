const Wrapper = (props: any) => {
  return (
    <div className="dark:bg-[#1A1B1E] bg-[#eee] dark:text-white w-full">
      {props.children}
    </div>
  );
};

export default Wrapper;
