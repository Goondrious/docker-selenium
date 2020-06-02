const webdriver = require('selenium-webdriver')
const { By, until } = webdriver


module.exports = (driver, url) => {
  const elements = {
    header: By.tagName('h5'),
    select: By.css('.MuiSelect-select')
  }
  return {
    url,
    elements,
    navigate: () => driver.navigate().to(url),
    waitUntilVisible: key => driver.wait(until.elementLocated(elements[key])),
    getText: async key => {
      driver.wait(until.elementLocated(elements[key]))
      return driver.findElement(elements[key]).getText()
    },
    click: key => {
      driver.wait(until.elementLocated(elements[key]))
      return driver.findElement(elements[key]).click()
    },
  }
}
