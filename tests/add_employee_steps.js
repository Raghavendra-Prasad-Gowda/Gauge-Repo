const {click, into, write, dropDown,$, clear } = require("taiko");

const dashboardPageLocators = require('../pageObjects/dashboardPageObjects.json');
const addEmployeePageLocators = require('../pageObjects/addEmployeeObjects.json');
const employeeListPageLocators = require('../pageObjects/employeeListPage.json');

const assert = require('assert').strict;


 step("Click on PIM Tab and click on Add Employee Feature",async()=>{

    //Click on PIM Module
    await click($(dashboardPageLocators.pimModule));

    //Click on AddEmployee Tab
    await click($(addEmployeePageLocators.addEmployeeTab));
 });

 step("Enter Employee Name <FirstName>, Middle Name <MiddleName> and Last Name <LastName>",async(firstName,middleName,lastName)=>{
    
    //Type First Name
    await write(firstName,into($(addEmployeePageLocators.firstNameTextbox)));

    //Type Middle Name
    await write(middleName,into($(addEmployeePageLocators.middleNameTextbox)));

    //Type Last Name
    await write(lastName,into($(addEmployeePageLocators.lastNameTextbox)));
});

step("Select Create Login Details",async()=>{

    //Select Create Login Credentials
    await click($(addEmployeePageLocators.createLoginCheckbox));
})


step("Enter Username <uname> and Password <password> and confirm the password again.",async(userName, Password)=>{
    //Type UserName
    await write(userName, into($(addEmployeePageLocators.userNameTextbox)));
    
    //Type Password
    await write(Password, into($(addEmployeePageLocators.passwordTextbox)));
    
    //Type Re-Confirm Password
    await write(Password, into($(addEmployeePageLocators.confirmPasswordTextbox)));
})

step("Select Status as <Enable_OR_Disable>",async(Status)=>{
    
    //Clicking on Enabled or Disabled dropdown
    if(Status==="Enabled"){
        await dropDown({id:addEmployeePageLocators.dropdownId}).select('Enabled');
    }else{
        await dropDown({id:addEmployeePageLocators.dropdownId}).select('Disabled');
    }
    
})

step("Click on Save",async()=>{

    //Clicking on Save Button
    await click(addEmployeePageLocators.saveButton);
});

step("Click on Employee List Tab",async()=>{

    //Click on Employee List Tab
    await click($(employeeListPageLocators.employeeListTab));
});


step("Verify if the Employee Name <FirstName> Created is reflecting in the system",async(firstName)=>{

    //Clearing and Entering the Text SearchText Box
    await click(($(employeeListPageLocators.employeeNameSearchTextbox)));

    await write(firstName, ($(employeeListPageLocators.employeeNameSearchTextbox)));

    //Click on Search button
    await click($(employeeListPageLocators.searchButton));

    var displayFirstName = await ($(employeeListPageLocators.firstNameValueInFirstResult)).text();
    
    //Verify the Display of create First Name
    assert.strictEqual(displayFirstName,firstName);

});