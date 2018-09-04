const yargs=require('yargs')
const request=require('request')

const argv=yargs.options({
    a:{
        demand:true,
        alias:'address',
        describe:' location for weather result',
        string:true
    }
})
.help()
.alias('help','h')
.argv

request({url:`http://maps.googleapis.com/maps/api/geocode/json?address=`,json:true},(err,res,body)=>{
    //console.log(body.results[0].formatted_address)
})

