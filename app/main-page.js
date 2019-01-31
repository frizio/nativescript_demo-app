// Event handler function fired by navigatingTo Page tag attribute
exports.onLoaded = args => {
    console.log("The page is loading");
    const page = args.object;
    page.bindingContext = {
        username: "frizio"
    };

    let i = 0;

    setInterval(() => {
        page.bindingContext = {
            username: `frizio ${i++}`
        };
    }, 1000);

}

exports.clickMe = () => {
    console.log("Button CLICK ME pressed");
    alert("Hey!!!");
}