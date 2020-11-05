const {click, into, write, dropDown,$, clear } = require("taiko");


const dashboardPageLocators = require('../pageObjects/dashboardPageObjects.json');
const applyLeavePageLocators = require('../pageObjects/applyLeavePageObjects.json');

step("Click on Leave Module Tab",async()=>{

   await click($(dashboardPageLocators.leaveModule));
});


step("Click on Apply Leave",async()=>{
    await click($(applyLeavePageLocators.applyTab));
 });


step("Select Leave Type as <leaveType>",async(leaveType)=>{

    await dropDown({id:applyLeavePageLocators.leaveType}).select(leaveType);
    
});


step("Enter From Date <fromDate> and To Date <toDate>",async(fromDate, toDate)=>{

    await clear($(applyLeavePageLocators.fromDate));
    await write(fromDate, into($(applyLeavePageLocators.fromDate)));

    await clear($(applyLeavePageLocators.toDate));
    await write(toDate, into($(applyLeavePageLocators.toDate)));
    
});


step("Provide the comments",async()=>{

    await write("Testing Leave Apply", into($(applyLeavePageLocators.commentsTextBox)));
});


step("Click on Apply",async()=>{

    await click($(applyLeavePageLocators.applyButton));
});
