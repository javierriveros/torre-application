import "twin.macro";
import Image from "next/image";
import { Organization } from "@/@types";

interface Props {
  organizations: Organization[];
  width?: number;

  [x: string]: any;
}
export const JobImage = ({ organizations, width = 64, ...rest }: Props) => {
  const picture = organizations?.filter(
    (organization: Organization) =>
      organization.picture !== "" ||
      organization.picture !== null ||
      organization.picture !== undefined
  );

  if (picture.length > 0 && picture[0].picture)
    return (
      <Image
        src={picture[0].picture}
        width={width}
        height={width}
        layout="fixed"
        tw="w-16 h-16 mb-4 rounded shadow"
        {...rest}
      />
    );

  return (
    <div
      tw="w-16 h-16 flex items-center justify-center rounded text-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white"
      {...rest}
    >
      {picture[0]?.name.substring(0, 1)}
    </div>
  );
};
