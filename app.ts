import { createApp } from "rice";
export default createApp({
  name: "launcher",
  title: "Launcher",
  icon: "/src/logo.png",
  app: {
    basedir: "build",
    index: "index.js",
  },
});
