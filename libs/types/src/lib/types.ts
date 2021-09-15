export function types(): string {
  return 'types';
}

export interface HairStyleType {
  texture: string;
  length: string;
  color: string;
}

export interface UserType {
  name: string;
  age: number;
  hairstyle: HairStyleType;
}
