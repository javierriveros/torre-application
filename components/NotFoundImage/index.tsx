import Image from "next/image";

export const NotFoundImage = ({ ...props }) => (
  <Image src="/404.png" width={260} height={140} layout="fixed" {...props} />
);
