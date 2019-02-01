const { Observable, fromObject, fromObjectRecursive } = require("tns-core-modules/data/observable");

const theModel = {
    "user" : {
        "username": "frizio",
        "password": ""
    }
};

const bindingContext = fromObjectRecursive(theModel);


exports.onLoaded = args => {
    console.log("The page is loading");
    const page = args.object;
    page.bindingContext = bindingContext;
}

exports.onTap = () => {
    console.log("Button TAP ME pressed");
    let username = bindingContext.get("user").username; 
    let password = bindingContext.get("user").password; 
    alert(`Hey, ${username}. Your password is ${password}`);
}