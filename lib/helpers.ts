export function usdMoney(amount: number) {
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export function hidePhone(str: string, separators: string[] = []) {
  let searchableString = str;
  const regexPattern: any = {
    "-": /\b8\d{3}-\d{4}\b/g,
    "": /\b8\d{3}\d{4}\b/g,
    " ": /\b8\d{3} \d{4}\b/g,
  };

  separators.forEach((separator) => {
    searchableString = searchableString.replace(regexPattern[separator], function (match) {
      return `<span class='phone-number-toggle' data-phone-number='${match}'>${match.replace(/\d{4}$/, "XXXX")}</span>`;
    });
  });

  return searchableString;
}
