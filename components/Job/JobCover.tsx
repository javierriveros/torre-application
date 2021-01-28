import "twin.macro";
import { Gradient } from "./styles";

interface Props {
  attachments: any;
}

export const JobCover = ({ attachments }: Props) => {
  const cover = attachments?.filter((a: any) => a.resource === "cover");
  const hasCover = cover.length > 0;

  return (
    <Gradient style={{ backgroundImage: hasCover ? `url(${cover[0].address})` : "" }}></Gradient>
  );
};
