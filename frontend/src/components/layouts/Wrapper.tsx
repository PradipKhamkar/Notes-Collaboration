const Wrapper = (props: any) => {
  return (
    <div className="h-screen w-screen bg-[url('https://images.pexels.com/photos/7130467/pexels-photo-7130467.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-no-repeat bg-cover ">
      {props.children}
    </div>
  );
};

export default Wrapper;
