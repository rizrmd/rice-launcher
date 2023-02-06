import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // instruct parcel to build tailwind

app.register("launcher", async () => {
  // inject tailwind to parent, since we live in different iframe
  asset.injectCSS("index.css");

  await ui.frame.create({
    name: "frame",
    render(el) {
      renderRoot(
        el,
        <div className={cx("flex flex-1 items-center justify-center")}>
          <img
            src={asset.url("img/icon.svg")}
            draggable={false}
            className={css`
              width: 40px;
              height: 40px;
            `}
          />
        </div>
      );
    },
  });

  await ui.frame.create({
    name: "frame-2",
    render(el) {
      renderRoot(
        el,
        <div className={cx("flex flex-1 items-center justify-center")}>
          <img
            src={asset.url("img/icon.svg")}
            draggable={false}
            className={css`
              width: 40px;
              height: 40px;
            `}
          />
        </div>
      );
    },
  });

  await ui.bar.create({
    name: "bar",
    placement: "start",
    render(el) {
      renderRoot(
        el,
        <div className={cx("flex flex-1 items-center space-x-2 px-5")}>
          <img
            src={asset.url("img/icon.svg")}
            draggable={false}
            className={css`
              width: 16px;
              height: 16px;
            `}
          />
          <span className="w-[55px]">Launcher</span>
        </div>
      );
    },
  });
});

// we create this function so it can render to same element
// without creating React's root multiple time.
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
