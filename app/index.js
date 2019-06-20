var bodyParser = require('body-parser');
var dateFormat = require('dateformat');
var rp = require('request-promise');
var cc_api_host = process.env.cc_api_host
var cc_api_port = process.env.cc_api_port
var cron = require('node-cron');

cron.schedule('*/10 * * * * *', function(){
   var json = JSON.parse('{"secondary_cur":["BTC","ETH","XRP","BSV","BCH","OMG"]}')
   console.log(json)
   postToCC(json)
   console.log("done")
})

function postToCC(json) {
  url = "http://" + cc_api_host + ":" + cc_api_port + "/getcurrency"
  return rp({
        uri: url,
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: json,
        json: true
    })
}
