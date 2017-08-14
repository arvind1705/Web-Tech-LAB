
function myfunction()
{


var EasyZip = require('easy-zip').EasyZip;
var zip5 = new EasyZip();
zip5.zipFolder('../Lab1',function(){
	zip5.writeToFile('folderall.zip');
});
}
