export interface IImage {
  src: string | { dark: string; light: string };
  alt: string;
  width?: number;
  height?: number;
}
