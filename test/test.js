const { Builder, until, By } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')

const chai = require('chai')
const expect = chai.expect

console.log(process.env.SELENIUM_SERVER)
const driver = new Builder()
  .usingServer(process.env.SELENIUM_SERVER)
  .forBrowser('chrome').build()


const dashPage = require('../dash-page')(driver, 'https://dash.flaat.io/')

describe('Covid Dashboard', function() {
  this.timeout(0)

  before(() => dashPage.navigate())

  it('displays the title', async () => {
    const title = await dashPage.getText('header')
    expect(title).to.contain('Canada COVID')
  })

  after(() => driver.quit())
})
