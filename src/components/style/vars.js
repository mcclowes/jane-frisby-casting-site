import { objectMap } from "codogo-utility-functions";

const sm = 768;
const md = 992;
const lg = 1200;

export const breakpoints = {
  xs: { min: 0, max: sm - 1 },
  sm: { min: sm, max: md - 1 },
  md: { min: md, max: lg - 1 },
  lg: { min: lg, max: 100000 },
};
export const bps = breakpoints;

export const colors = {
  text: "#444",
  footer: "#000",
  grey: "rgba(0,0,0,0.2)",
  lines: "rgba(0,0,0,0.2)",
};

colors.nav = colors.text;

export const font = {
  size: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "17px",
  },

  title: {
    family: "Abel, sans-serif",
  },
};

const gutter = {
  xs: 20,
  sm: 60,
  md: 80,
  lg: 80,
};

export const scrollbar = {
  width: "10px",
  color: {
    track: "#ddd",
    thumb: colors.text,
  },
};

export const dimensions = {
  nav: {
    height: {
      xs: "50px",
      other: "70px",
    },
    margin: {
      xs: "10px",
      other: "30px",
    },
    logoHeight: {
      xs: "40px",
      other: "60px",
    },
  },
  footer: {
    height: {
      xs: "40px",
      other: "60px",
    },
  },
  gutter: {
    full: objectMap(gutter, (k, v) => v + "px"),
    half: objectMap(gutter, (k, v) => 0.5 * v + "px"),
    quarter: objectMap(gutter, (k, v) => 0.25 * v + "px"),
    minusQuarter: objectMap(gutter, (k, v) => -0.25 * v + "px"),
    tripleHalf: objectMap(gutter, (k, v) => 1.5 * v + "px"),
    fullNum: gutter,
    halfNum: objectMap(gutter, (k, v) => 0.5 * v),
    quarterNum: objectMap(gutter, (k, v) => 0.25 * v),
    tripleHalfNum: objectMap(gutter, (k, v) => 1.5 * v),
  },
  scrollbar: scrollbar.width,
};
dimensions.gutter.container = {
  ...dimensions.gutter.full,
  xs: dimensions.gutter.full.xs,
};
export const dim = dimensions;

export const meta = {
  googleSearch: "XWeFfZIDjQ8M2CyBY5AFZo5cuFqrNvPOd-0gsjdRoQE",
};
