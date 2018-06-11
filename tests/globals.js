import chromeDriver from 'chromedriver'

export const before = done => {
  chromeDriver.start()
  done()
}

export const after = done => {
  chromeDriver.stop()
  done()
}
