export interface IBuilder {
  elemClassList: string[];
  text: string;
  tag?: string;
  onClick?: () => void;
}

export interface IImageBuilder extends IBuilder {
  src: string;
  alt: string;
  tag: string;
}

export interface IInputBuilder extends IBuilder {
  id: string;
  minLength: number;
}
