import styled from '@emotion/styled';
import tw from 'tailwind.macro';

export const SolidBtn = styled.button`
  ${tw`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full`}
`;

export const OutlineBtn = styled.button`
  ${tw`bg-transparent hover:bg-indigo-700 text-indigo-700 hover:text-white font-bold py-2 px-6 rounded-full`}
`;

export const PlainBtn = styled.button`
  ${tw`text-white text-sm hover:underline`}
`;
