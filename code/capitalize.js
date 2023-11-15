function capitalize(string) {
  if (string.length === 0) return "";
  return string.split("")[0].toUpperCase() + string.split("").slice(1).join("");
}

module.exports = capitalize;
