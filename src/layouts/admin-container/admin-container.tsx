import { PropsWithChildren } from "react";

export const AdminContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-[70px_1fr] h-screen w-screen">
      <aside className="col-start-1 col-end-2 bg-blend-darken border-r row-start-1 row-end-3">
        Aside
      </aside>
      <header className="col-start-2 col-end-3 border-b">Header</header>
      <main className="col-start-2 col-end-3">{children}</main>
    </div>
  );
};
