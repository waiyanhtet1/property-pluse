import Link from "next/link";

interface Props {
  title: string;
  description: string;
  variant: "primary" | "secondary";
  buttonInfo: { text: string; link: string };
}

const InfoBox = ({ title, description, variant, buttonInfo }: Props) => {
  return (
    <div
      className={`${
        variant === "primary" ? "bg-gray-100" : "bg-blue-100"
      } p-6 rounded-lg shadow-md`}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{description}</p>
      <Link
        href={buttonInfo.link}
        className={`${
          variant === "primary"
            ? "bg-black hover:bg-gray-700"
            : "bg-blue-500 hover:bg-blue-600"
        } inline-block  text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
