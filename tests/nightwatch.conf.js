require('babel-register')()

module.exports = {
  src_folders: ['tests'],
  output_folder: 'reports',
  globals_path: 'globals.js',
  selenium: {
    start_process: false
  },
  test_settings: {
    default: {
      selenium_port: 9515,
      selenium_host: 'localhost',
      default_path_prefix: '',
      globals: {
        waitForConditionTimeout: 5000
      },
      launch_url: 'http://localhost:3001',
      desiredCapabilities: {
        browserName: 'chrome',
        acceptSslCerts: true
      }
    }
  }
}
