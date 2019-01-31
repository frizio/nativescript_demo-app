const { Observable, fromObject } = require("tns-core-modules/data/observable");

exports.onLoaded = args => {
    console.log("The page is loading");
    const page = args.object;

    // ONE-WAY data binding
    /*
    page.bindingContext = {
        username: "frizio"
    };
    */

    // TWO-WAY data binding with Observable
    /*
    const theModel = new Observable();
    theModel.set("username", "frizio");
    page.bindingContext = theModel;
    */

    // TWO-WAY data binding with fromObject
    const theModel = {
        "username": "frizio"
    };
    page.bindingContext = fromObject(theModel);
    

}

exports.clickMe = () => {
    console.log("Button CLICK ME pressed");
    alert("Hey!!!");
}