const {click, write,$} = require("taiko");

const employeeListPageLocators = require('../pageObjects/employeeListPage.json');
const deletePageLocators = require('../pageObjects/deletePageObjects.json');


step("Enter the <firstname> and Click on Search button", async(firstName)=>{

    await click(($(employeeListPageLocators.employeeNameSearchTextbox)));

    await write(firstName, ($(employeeListPageLocators.employeeNameSearchTextbox)));
 
    await click($(employeeListPageLocators.searchButton));
});




step("Select the Employee Name displayed and Click on Delete button", async()=>{

    await click($(deletePageLocators.selectAllCheckbox));

    await click($(deletePageLocators.deleteButton));

    await click($(deletePageLocators.dialogOKButton));

});
