import { Transform } from 'class-transformer';
export const ParseInt = () => Transform(({ value }) => Number.parseInt(value));
