const { Observable } = require("tns-core-modules/data/observable");

exports.onLoaded = args => {
    console.log("The page is loading");
    const page = args.object;

    // ONE-WAY data binding
    /*
    page.bindingContext = {
        username: "frizio"
    };
    */

    // TWO-WAY data binding
    const theModel = new Observable();
    theModel.set("username", "frizio");
    page.bindingContext = theModel;

}

exports.clickMe = () => {
    console.log("Button CLICK ME pressed");
    alert("Hey!!!");
}