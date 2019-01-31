const { Observable, fromObject } = require("tns-core-modules/data/observable");

const theModel = {
    "username": "",
    "password": ""
};
const bindingContext = fromObject(theModel);

exports.onLoaded = args => {
    console.log("The page is loading");
    const page = args.object;

    page.bindingContext = bindingContext;
}

exports.onTap = () => {
    console.log("Button TAP ME pressed");
    alert(`Hey, ${bindingContext.get("username")}. Your password is ${bindingContext.get("password")} `);
}