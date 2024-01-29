import { DefaultTheme } from 'styled-components';
import COLORS from './colors';
import { FONT_TOKEN } from './fonts';

export type ColorsType = typeof COLORS;
export type FontTokenType = typeof FONT_TOKEN;

const theme: DefaultTheme = {
  COLORS: COLORS,
  FONT_TOKEN,
};

export default theme;
