function numAverage(a: Array<number>) {
  var b = a.length,
      c = 0, i;
  for (i = 0; i < b; i++){
    c += Number(a[i]);
  }
  return c/b;
}

export { numAverage };
