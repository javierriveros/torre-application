import { useRouter } from "next/dist/client/router";

import { default as NextLink } from "next/link";
import { NavLink } from "./styles";

export default function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const active = router.pathname === href;
  return (
    <NextLink href={href} passHref>
      <NavLink isActive={active}>{children}</NavLink>
    </NextLink>
  );
}
