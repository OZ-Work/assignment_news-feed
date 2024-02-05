export function replaceQuotes(string: string) {
  return string?.replace(/ ^ "(.*)" $ /, "$1");
}

export function replaceHTMLEntities(string: string) {
  return string?.replace(/&#(\d+);/g, (_, charCode) =>
    String.fromCharCode(charCode)
  );
}
