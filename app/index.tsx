import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { app, bar, cx, css, importCSS } from "rice";
import "./index.css";

app.register("launcher", async () => {
  importCSS("launcher", "index.css");

  await bar.create((el) => {
    renderRoot(
      el,
      <div
        className={cx(
          "flex flex-1 items-center bg-blue-400 rounded-md",
          css`
            padding: 0px 10px;
          `
        )}
      >
        Cobaan nya{" "}
      </div>
    );
  });
});

const renderRoot = (el: HTMLDivElement, node: ReactNode) => {
  const reactEl = el as unknown as HTMLDivElement & {
    root: ReturnType<typeof createRoot>;
  };

  if (!reactEl.root) {
    const root = createRoot(el);
    reactEl.root = root;
  }

  reactEl.root.render(node);
};
