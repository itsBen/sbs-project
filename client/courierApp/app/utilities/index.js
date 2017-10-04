export const getTotalPrice = products => {
  let sum = 0;
  Object.values(products).forEach(product => {
    sum += parseFloat(product.price);
  });
  return sum.toFixed(2);
};

export const capitalize = string => {
  return string[0].toUpperCase() + string.substr(1).toLowerCase();
};
