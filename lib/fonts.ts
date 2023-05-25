import localFont from "next/font/local";
const avenir = localFont({
  src: [
    {
      path: "../assets/fonts/avenir-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir-bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir-light.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  preload: true,
});

export { avenir };