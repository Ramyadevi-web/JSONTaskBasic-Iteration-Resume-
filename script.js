
var resumeReq = new XMLHttpRequest();
var pincodeReq = new XMLHttpRequest();

pincodeReq.open("GET","sample.json");
resumeReq.open("GET","resume.json");

pincodeReq.send();
resumeReq.send();

//Function for for-loop iteration of JSON
pincodeReq.onload = function() {
    var data = JSON.parse(pincodeReq.response);
    
//For Loop
for(let i=0;i<data.length;i++){
    console.log("District Name:",data[i].district);
    console.log("Minimum Pincode:",+data[i].pincode.minPincode);
    console.log("Maximum Pincode:",+data[i].pincode.maxPincode);
    console.log("Total No. Of Pincodes:",+data[i].totalNoOfPincode);
}

//For-in Loop
    for(let key in data){
        console.log("District Name:",data[key].district);
        console.log("Minimum Pincode:",+data[key].pincode.minPincode);
        console.log("Maximum Pincode:",+data[key].pincode.maxPincode);
        console.log("Total No. Of Pincodes:",+data[key].totalNoOfPincode);
    }

//For-of Loop
for(let element of data){
    console.log("District Name:",element.district);
    console.log("Minimum Pincode:",+element.pincode.minPincode);
    console.log("Maximum Pincode:",+element.pincode.maxPincode);
    console.log("Total No. Of Pincodes:",+element.totalNoOfPincode);
}
//For-each Loop
data.forEach(element => {
    console.log("District Name:",element.district);
    console.log("Minimum Pincode:",element.pincode.minPincode);
    console.log("Maximum Pincode:",element.pincode.maxPincode);
    console.log("Total No. Of Pincodes:",element.totalNoOfPincode);
});
    
}


//Function for Rsume data in JSON Format
resumeReq.onload = function() { 
    var data = JSON.parse(resumeReq.response);
    console.log("Resume Data in JSON Format");
    console.log(data);
}
