const { Builder, until, By } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')

const chai = require('chai')
const expect = chai.expect

console.log("-----env: ", process.env.HUB)
const driver = new Builder()
  .usingServer('http://' + process.env.HUB)
  // .usingServer('http:/selenium-hub:4444/wd/hub')
  // .usingServer('http://localhost:4444/wd/hub')
  .forBrowser('chrome').build()


const dashPage = require('../dash-page')(driver, 'https://dash.flaat.io/')

describe('Covid Dashboard', function() {
  this.timeout(0)

  before(() => dashPage.navigate())

  it('displays the title', async () => {

    /*
      driver.wait(until.elementLocated(elements[key]))
      return driver.findElement(elements[key]).getText()
    */
    await dashPage.waitUntilVisible('header')
    const title = await dashPage.getText('header')
    
    // driver.wait(until.elementLocated(By.tagName('h5')))
    // const title = await driver.findElement(By.tagName('h5')).getText()
    expect(title).to.contain('Canada COVID')
    expect(title).to.equal('Canada COVID 19 Insights????')
    console.log('-----', title)
  })

  after(() => driver.quit())
})
