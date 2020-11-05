const { openBrowser, write, closeBrowser, goto,click, into, $,screencast} = require('taiko');

const assert = require('assert').strict;

const loginPageLocators = require ('../pageObjects/loginPageObjects.json');
const dashboardPageLocators = require('../pageObjects/dashboardPageObjects.json');

step("Open Chrome Browser",async()=>{
    await openBrowser({headless:false});
})

step("Goto the login page of HRM Demo URL <URL>",async(URL)=>{
    await goto(URL);
});    

step("Enter username <Username> and password <Password>",async(Username,Password)=>{

    await write(Username,into($(loginPageLocators.usernameTextbox)));

    await write(Password,into($(loginPageLocators.passwordTextbox)));
});


step("Click on Login button",async()=>{

    await click($(loginPageLocators.loginButton));
});


step("Verify if the Username is Displayed in the right top corner of the page", async()=>{

    var name=await ($(dashboardPageLocators.usernameBanner)).text(); 

    assert.strictEqual(name.length>0,true);
});

step("Click on Logout Button",async()=>{

    click($(dashboardPageLocators.usernameBanner));

    click(dashboardPageLocators.logoutButton);
});

step("Verify the unsuccessful login message display", async()=>{

    var actualUnsuccessfulMessage = await ($(loginPageLocators.invalidCredentialsMessageSpan)).text();

    assert.strictEqual(actualUnsuccessfulMessage,"Tester");

});


step("Close Chrome Browser",async()=>{
    await closeBrowser();
});


