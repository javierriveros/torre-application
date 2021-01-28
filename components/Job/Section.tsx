import "twin.macro";
import { SectionTitle } from "./styles";

export const Section = ({
  title,
  children,
  ...rest
}: {
  title: string;
  children: any;
  [x: string]: any;
}) => (
  <section tw="my-6" {...rest}>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </section>
);
