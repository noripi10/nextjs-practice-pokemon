import { FC } from 'react';

const NoSSR: FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;

export default NoSSR;
