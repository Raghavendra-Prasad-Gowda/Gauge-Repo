const { openBrowser, write, closeBrowser, goto,click, into, $} = require('taiko');

const assert = require('assert').strict;

const loginPageLocators = require ('../pageObjects/loginPageObjects.json');
const dashboardPageLocators = require('../pageObjects/dashboardPageObjects.json');

step("Open Chrome Browser",async()=>{
    //Opening Browser
    await openBrowser({headless:false});
})

step("Goto the login page of HRM Demo URL <URL>",async(URL)=>{
    //Navigating to the URL
    await goto(URL);
});    

step("Enter username <Username> and password <Password>",async(Username,Password)=>{
    //Entering the Username
    await write(Username,into($(loginPageLocators.usernameTextbox)));

    //Entering the Password
    await write(Password,into($(loginPageLocators.passwordTextbox)));
});


step("Click on Login button",async()=>{
    //Click on Login Button
    await click($(loginPageLocators.loginButton));
});

step("Verify if the Username is Displayed in the right top corner of the page", async()=>{

    //Username Display 
    var name=await ($(dashboardPageLocators.usernameBanner)).text(); 
    if(name.length>0){
        console.log("Login Success");
    }else{
        console.log("Login Fail");
    }
});

step("Click on Logout Button",async()=>{

    //Clicking on Username Banner
    click($(dashboardPageLocators.usernameBanner));

    //Clicking on Logout Button
    click(dashboardPageLocators.logoutButton);
});

step("Verify the unsuccessful login message display", async()=>{

    var actualUnsuccessfulMessage = await ($(loginPageLocators.invalidCredentialsMessageSpan)).text();

    //Verify Unsuccessful Message Display
    assert.strictEqual(actualUnsuccessfulMessage,"Invalid credentials");

});


step("Close Chrome Browser",async()=>{
    //Closing the Browser
    await closeBrowser();
});


