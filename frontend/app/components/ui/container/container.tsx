import type { PropsWithChildren } from 'react';

type ContainerProps = {
  centered?: boolean;
} & PropsWithChildren;

export const Container = ({ children, centered = false }: ContainerProps) => {
  let className = 'flex flex-col w-full gap-3';
  if (centered) {
    className = className.concat(' items-center justify-center');
  } else {
    className = className.concat(' items-stretch justify-start');
  }

  return (
    <main className="flex py-8 px-16 container min-h-screen">
      <section className={className}>{children}</section>
    </main>
  );
};
