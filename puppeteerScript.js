/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */

let counter = 1;

const selector = {
    class(attribute, className) {
        return `${attribute}[class='${className}']`
    },
    type(attribute, value) {
        return `${attribute}[type='${value}']`
    },
    id(value) {
        return `#${value}`
    }
}

async function doLogin(page) {
    const loginUrl = 'https://localhost:7003/Identity/Account/Login'
    await page.waitForTimeout(2000)
    await page.goto(loginUrl);
    await page.type(selector.id('Input_Email'), 'demo@demo.com');
    await page.type(selector.id('Input_Password'), 'P@$$w0rd');
    console.log(`Entered user credentials`)
    await page.click(selector.type('button', 'submit'));
    console.log(`Login is successful`)
}

async function setup(browser, context) {
    // launch browser for LHCI
    const page = await browser.newPage();
    await page.setCacheEnabled(true)

    if (counter === 1) {
        await doLogin(page)
    }
    else {
        await page.goto(context.url);
    }
    // close session for next run
    await page.close();
    counter++
}

module.exports = setup