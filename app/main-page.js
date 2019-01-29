// Event handler function fired by navigatingTo Page tag attribute
exports.theFunction = args => {
    console.log("Main event handler function");
    const page = args.object;
    // Set the page binding context
    page.bindingContext = {
        message: "Hello from the code behind file!!"
    };

    setTimeout(() => {
        page.bindingContext = {
            message: "Time is off. Something happened and change in the logic"
        };  
    }, 5000);

}
