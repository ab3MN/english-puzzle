function checkIsNull(elem: unknown, elemName: string) {
  if (elem === null) throw new Error(`${elemName} is null`);
}

export default checkIsNull;
