const request=require('request')

module.exports.getLocation=(address,callback)=>{
    location='';
    location=request({
        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json:true
    },(err,res,body)=>{
        callback(body.results[0].geometry.location)    
    }
    )
    
}


