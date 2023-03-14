interface String {
  replaceAll(search: string, replacement: string): String;
}
function normalizeText(text: String): String {
  let result : String
  result = text.replaceAll("á", "a")
  result = result.replaceAll("é", "e")
  result = result.replaceAll("í", "i")

  result = result.replaceAll("ó", "o")
  result = result.replaceAll("ú", "u")
  result = result.replaceAll("ñ", "n")
  result = result.replaceAll("ü", "u")
  result = result.replaceAll("Á", "A")
  result = result.replaceAll("É", "E")
  result = result.replaceAll("Í", "I")
  result = result.replaceAll("Ó", "O")
  result = result.replaceAll("Ú", "U")
  result = result.replaceAll("Ñ", "N")
  result = result.replaceAll("Ü", "U")
    return result
}

export default normalizeText
