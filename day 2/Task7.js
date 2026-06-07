function getAppSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: "dark",
        language: "English"
      });
    }, 2000)
  })
}

getAppSettings()
  .then((settings) => {
    console.log("Theme:", settings.theme)
    console.log("Language:", settings.language)
  })