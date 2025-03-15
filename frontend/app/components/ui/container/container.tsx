import type { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 container min-h-screen">
      {children}
    </main>
  );
};
