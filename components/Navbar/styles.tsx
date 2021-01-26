import tw, { styled } from "twin.macro";

export const ProfilePicture = tw.img`h-8 w-8 rounded-full group-focus:ring-2 group-focus:ring-offset-2 group-focus:ring-offset-gray-800 bg-gray-800 group-focus:ring-white`;

export const Username = tw.span`text-gray-500 group-focus:text-gray-800 ml-2 font-medium group-focus:dark:text-gray-300 dark:text-gray-400`;

export const MenuLink = tw.a`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-800 hover:dark:bg-gray-700`;

export const NavLink = styled.a<{ isActive?: boolean }>`
  ${tw`transition hover:text-torre-500`}
  ${({ isActive }) =>
    isActive ? tw`font-medium text-torre-500` : tw`font-normal text-gray-500`}
`;

export const Nav = tw.nav`fixed z-10 flex items-center w-full px-8 py-4 bg-white shadow dark:bg-gray-800 justify-between transition-colors`;
