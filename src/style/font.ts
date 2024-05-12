import { Roboto, Noto_Sans_KR } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-roboto', // 폰트 변수 설정
});

export const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '400', '700', '900'],
  variable: '--font-notoSansKr',
});
