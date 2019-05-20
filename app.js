console.log("Starting weather App");
const yargs=require("yargs");
const geocode=require("./geocode/geocode")
var arg=yargs
.options({
    address:{
        demand:true,
        string:true,
        describe:'Enter the Address whose weather you want',
        alias:'a'
    }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeadd(arg.address,(error,results)=>{

    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(JSON.stringify(results));
    }

});

console.log(arg.address);