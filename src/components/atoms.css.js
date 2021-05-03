import { createAtomicStyles, createAtomsFn } from "@vanilla-extract/sprinkles";

const color = createAtomicStyles({
  properties: {
    background: {
      "bg": "papayawhip",
    },
  },
});

const atoms = createAtomsFn(color);

export { atoms };
