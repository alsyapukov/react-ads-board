const priceFormat = (price, currency, locale = "ru-RU") => {
  return new Intl.NumberFormat(locale, {
     style: 'currency', 
     currency,
     minimumFractionDigits: 0
  }).format(price)
}

export default priceFormat;

export {
  priceFormat
}