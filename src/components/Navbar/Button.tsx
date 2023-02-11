interface ButtonI {
  title: string;
}

const Button = ({ title }: ButtonI) => {
  return (
    <button className="border w-[5.5rem] h-[2.5rem] rounded-md border-[#5ae7c8] text-[#5ae7c8]">
      {title}
    </button>
  );
};

export default Button;
