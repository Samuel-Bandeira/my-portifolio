interface ButtonI {
  title: string;
}

const Button = ({ title }: ButtonI) => {
  return (
    <button className="border w-[15rem] h-[4rem] rounded-md border-[#5ae7c8] text-[#5ae7c8]">
      {title}
    </button>
  );
};

export default Button;
