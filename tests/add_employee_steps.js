const {click, into, write, dropDown,$} = require("taiko");

const dashboardPageLocators = require('../pageObjects/dashboardPageObjects.json');
const addEmployeePageLocators = require('../pageObjects/addEmployeeObjects.json');
const employeeListPageLocators = require('../pageObjects/employeeListPage.json');

const assert = require('assert').strict;


 step("Click on PIM Tab",async()=>{

    await click($(dashboardPageLocators.pimModule));

 });

 step("Click on Add Employee Feature",async()=>{

    await click($(addEmployeePageLocators.addEmployeeTab));
 });

 step("Enter Employee Name <FirstName>, Middle Name <MiddleName> and Last Name <LastName>",async(firstName,middleName,lastName)=>{
    
    await write(firstName,into($(addEmployeePageLocators.firstNameTextbox)));

    await write(middleName,into($(addEmployeePageLocators.middleNameTextbox)));

    await write(lastName,into($(addEmployeePageLocators.lastNameTextbox)));
});

step("Select Create Login Details",async()=>{

    await click($(addEmployeePageLocators.createLoginCheckbox));
})


step("Enter Username <uname> and Password <password> and confirm the password again.",async(userName, Password)=>{
    
    await write(userName, into($(addEmployeePageLocators.userNameTextbox)));
     
    await write(Password, into($(addEmployeePageLocators.passwordTextbox)));
    
    await write(Password, into($(addEmployeePageLocators.confirmPasswordTextbox)));
})

step("Select Status as <Enable_OR_Disable>",async(Status)=>{
    
    if(Status==="Enabled"){
        await dropDown({id:addEmployeePageLocators.dropdownId}).select('Enabled');
    }else{
        await dropDown({id:addEmployeePageLocators.dropdownId}).select('Disabled');
    }
    
})

step("Click on Save",async()=>{

    await click(addEmployeePageLocators.saveButton);
});

step("Click on Employee List Tab",async()=>{

    await click($(employeeListPageLocators.employeeListTab));
});


step("Verify if the Employee Name <FirstName> Created is reflecting in the system",async(firstName)=>{

    await click(($(employeeListPageLocators.employeeNameSearchTextbox)));

    await write(firstName, ($(employeeListPageLocators.employeeNameSearchTextbox)));

    await click($(employeeListPageLocators.searchButton));

    var displayFirstName = await ($(employeeListPageLocators.firstNameValueInFirstResult)).text();
    
    assert.strictEqual(displayFirstName,firstName);

});