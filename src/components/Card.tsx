type PropType = {
  name: string;
  dateOfYear: string;
  isVerified: boolean;
  tag: string;
  desceiption: string;
};

export const Card = ({ data }: { data: PropType }) => {
  return (
    <div className="flex flex-col justify-between px-5 py-5 border border-black w-[320px] h-[450px] rounded-[12px]">
      <div className="flex flex-col gap-8">
        <h2 className="text-[black] text-[16px]">{data.name}</h2>
        <p>{data.desceiption}</p>
      </div>
      <p className="text-black text-[20px]">{data.dateOfYear}</p>
    </div>
  );
};
