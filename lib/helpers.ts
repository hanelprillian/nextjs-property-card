export function usdMoney(amount: number) {
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export function hidePhone(str: string, separator = "-") {
  let searchableString = str;
  const regexPattern: any = {
    "-": /\b8\d{3}-\d{4}\b/g,
    "": /\b8\d{3}\d{4}\b/g,
    " ": /\b8\d{3} \d{4}\b/g,
  };

  searchableString = searchableString.replace(regexPattern[separator], function (match) {
    return match.replace(/\d{4}$/, "XXXX");
  });

  return searchableString;
}
