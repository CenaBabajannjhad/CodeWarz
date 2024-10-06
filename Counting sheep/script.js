const countSheeps = (sheep) =>
  sheep.reduce(
    (acc, curr) =>
      curr === false || curr === undefined || curr === null ? acc + 0 : acc + 1,
    0
  );
