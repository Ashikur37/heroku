const request=require('request')

module.exports.getWeather=(address,callback)=>{
    location='';
    location=request({
        url:`https://api.darksky.net/forecast/9191047a16d567c39f952e4587f38a7d/${address.lat},${address.lng}`,
        json:true
    },(err,res,body)=>{
        callback(body)    
    }
    )
    
}