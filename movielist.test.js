const { Builder, Capabilities } = require("selenium-webdriver");
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const { addMovie, deleteMovie, crossOffMovie } = require("../testFunctions/addMovie")

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})

describe("movie list functionality", () => {
    it("add a movie", async () => {
        await addMovie(driver);
        await driver.sleep(3000);

    })
    
    it("cross off movie", async () => {
        await crossOffMovie(driver);
        await driver.sleep(5000);
    })

    it("deletes a movie", async () => {
        await deleteMovie(driver);
    })
})
