export const isSubsetOfWith =
  <ValueType, OtherValueType>(
    otherArr: Readonly<Array<OtherValueType>>,
    isEqual: (value: ValueType, otherValue: OtherValueType) => boolean
  ) =>
  (arr: Readonly<Array<ValueType>>): boolean => {
    return arr.every((item) =>
      otherArr.some((otherItem) => isEqual(item, otherItem))
    );
  };
