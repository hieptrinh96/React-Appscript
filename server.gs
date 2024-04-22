function doGet() {
  console.log('Serving the index.html file')
  return HtmlService.createHtmlOutputFromFile('index').evaluate()
}
