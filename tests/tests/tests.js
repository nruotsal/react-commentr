module.exports = {
  after: browser => browser.end(),

  'Should render comments': browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body')
  }
}
