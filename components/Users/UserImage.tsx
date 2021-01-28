import "twin.macro";
import Image from "next/image";

interface Props {
  picture: string | null;
  username: string;
}

export const UserImage = ({ picture, username }: Props) => {
  if (picture) {
    return (
      <Image
        src={picture}
        width={64}
        height={64}
        layout="fixed"
        tw="w-16 h-16 mb-4 rounded shadow"
      />
    );
  }

  return (
    <div tw="w-16 h-16 flex items-center justify-center rounded text-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white uppercase">
      {username.substr(0, 1)}
    </div>
  );
};
