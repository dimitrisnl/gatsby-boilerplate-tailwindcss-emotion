<H1 align="center">
  Gatsby boilerplate
</H1>

The purpose of this boilerplate is to combine TailwindCSS with Emotion, in order to hit the ground running as fast as possible.

Component that are reused all over the place can be referenced like this

```js
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
```

While still being allowed to be themed further:

```js
<SolidBtn className="mb-2 md:mb-0">Call to action</SolidBtn>

```

In order to keep the CSS bundle down, I use PurgeCSS.

> NOTE: `tailwind.macro` is still in alpha. Need to upgrade when the stable version has been released.
