/* Copyright (c) 2017, Sejong University. All rights reserved

Testing of ADN Profile 4: Run file. 
This document contains the implementation code of oneM2M ADN profile 4. oneM2M is open standard for IoT. The purpose of this ADN pofile is Testing. ADN Profile 4 covers almost every test case related to AE in oneM2M standards.
Email : love9ly@gmail.com

How To Use: Un Comment the code, which function you want to test.
*/

var adn4 = require("./adn4.js");

var cseName = "/Mobius"; // to concatenate with url in any request
var aeNameForUpdate = "/edu6";
var cnt_test = "/bookinfo";
var cinLatest = "/latest";
var cinOldest = "/oldest";
var cinName = "/bookinfo";
var url = "http://203.250.148.89:7579";
var origin = "SOrigin"; 
var AEOrigin = "S";
//get CSE test case
//adn4.getCSE(origin,url);

// ************************************** AE : CREATE ***********************************//
//create AE mandatory attributes
var api = "0.2.481.2.0001.001.000111";
var rr = true;
//adn4.createAE(origin,url,api,rr);

//create AE with resource Name
var rn="my_ressource";
//adn4.createAErn(AEOrigin,url,api,rr,rn);

//create AE with expirationTime
var et="20180101T000000";
// adn4.createAEet(AEOrigin,url,api,rr,et);

//create AE with label
var lbl=["my_label"];
//adn4.createAElbl(AEOrigin,url,api,rr,lbl);

//create AE with application name
var apn="my_application";
// adn4.createAEapn(AEOrigin,url,api,rr,apn);

//create AE with pointOfAccess
var poa=["http://127.0.0.1:42"];
// adn4.createAEpoa(AEOrigin,url,api,rr,poa);

//create AE with nodeLink
// var nl="my_node";
var nl=""; // due to bug in mobius sending NULL at the moment
// adn4.createAEnl(AEOrigin,url,api,rr,nl);


//create AE with contentSerialization
var csz="JSON";
//adn4.createAEcsz(AEOrigin,url,api,rr,csz);

// ************************************** AE : UPDATE ***********************************//

//update AE with expirationTime\
//adn4.updateAEet(AEOrigin,url,et);

//update AE with label
// adn4.updateAElbl(AEOrigin,url,lbl);

//update AE with applicationName
// adn4.updateAEapn(AEOrigin,url,apn);

//update AE with pointOfAccess
// adn4.updateAEpoa(AEOrigin,url,poa);

//update AE with nodeLink
// adn4.updateAEnl(AEOrigin,url,nl);

//update AE with requestReachability
// adn4.updateAErr(AEOrigin,url,rr);

//update AE with contentSerialization
// adn4.updateAEcsz(AEOrigin,url,csz);

// ************************************** AE : DELETE ***********************************//

//Deleting AE
// adn4.deleteAE(AEOrigin,url);

// ************************************** AE : Retrieve ***********************************//
//Reterieving AE
// adn4.getAE(AEOrigin,url);

// ************************************** Container : Create ***********************************//

var cr="my_creator";
var mni="100";
var mbs="10000";
var mia="500";

// Creating Container with no attribute set
// adn4.createContainer(AEOrigin,url);

// Creating Container with resourceName attribute
// adn4.createContainerrn(AEOrigin,url,"cnt_test");

//Creating Container with expirationTime attribute
// adn4.createContaineret(AEOrigin,url,et);

//Creating Container with label attribute
// adn4.createContainerlbl(AEOrigin,url,lbl);

//Creating Container with creator attribute
// adn4.createContainercr(AEOrigin,url,cr);

//Creating Container with maxNrOfInstances attribute
// adn4.createContainermni(AEOrigin,url,mni);

//Creating Container with maxByteSize attribute
// adn4.createContainermbs(AEOrigin,url,mbs);

//Creating Container with maxInstanceAge attribute
// adn4.createContainermia(AEOrigin,url,mia);

// ************************************** Container : UPDATE ***********************************//


//update Container with expirationTime attribute
// adn4.updateContaineret(AEOrigin,url,et);

//update Container with label attribute
// adn4.updateContainerlbl(AEOrigin,url,lbl);

//update Container with maxNrOfInstances attribute
// adn4.updateContainermni(AEOrigin,url,mni);

//update Container with maxByteSize attribute
// adn4.updateContainermbs(AEOrigin,url,mbs);

//update Container with maxInstanceAge attribute
// adn4.updateContainermia(AEOrigin,url,mia);


// ************************************** Container : DELETE ***********************************//


//DELETE Container with maxInstanceAge attribute
// adn4.deleteContainer(AEOrigin,url);

// ************************************** Container : Retrieve ***********************************//


//Retrive Container with maxInstanceAge attribute
// adn4.getContainer(AEOrigin,url);

// **************************//re************ ContentInstance : CREATE ***********************************//
var condition=process.argv[2];
var rn = process.argv[3];
var con = process.argv[4];
cnt_test= process.argv[5];
console.log(cnt_test)
var cnf=1; //encoding type, can be 0:plain, 1:base64 encode string, 2: base64 encoded binary
var conr="content_ref";

if(condition==1){
	//creat
url=url+cseName+aeNameForUpdate+cnt_test 
adn4.createContentInstancern(AEOrigin,url,con,rn);

	
}else if(condition==2){
	//retrive
  url=url+cseName+aeNameForUpdate+cnt_test+rn
	  
adn4.getContentInstance(AEOrigin,url);
}else if(condition==3){
	//delete
url=url+cseName+aeNameForUpdate+cnt_test+rn
  adn4.deleteContentInstance(AEOrigin,url);
	
}else if(condition ==4){
	//lastest
a=1
}
//Creating ContentInstance with mandatory attributes
// adn4.createContentInstance(AEOrigin,url,con);

//Creating ContentInstance with resourceName attributes
 //adn4.createContentInstancern(AEOrigin,url,"111:ckehdrnr:dhckssasdas","bookinfo");

//Creating ContentInstance with expirationTime attributes
// adn4.createContaineret(AEOrigin,url,con,et);

//Creating ContentInstance with labels attributes
// adn4.createContentInstancelbl(AEOrigin,url,con,lbl);


//Creating ContentInstance with creator attributes
// adn4.createContentInstancecr(AEOrigin,url,con,cr);//

//Creating ContentInstance with contentInfo attributes
// adn4.createContentInstancecnf(AEOrigin,url,con,cnf);


//Creating ContentInstance with contentInfo attributes
// adn4.createContentInstanceconr(AEOrigin,url,con,conr);


// ************************************** ContentInstance : Retrieve ***********************************//

//get contentInstance by name
// adn4.getContentInstance(AEOrigin,url);

//get latest contentInstance
// adn4.getContentInstanceLatest(AEOrigin,url);

//get oldest contentInstance
// adn4.getContentInstanceOldest(AEOrigin,url);



// ************************************** ContentInstance : Delete ***********************************//
//url =url+adn4.cseName+adn4.aeNameForUpdate+adn4.cnt_test+"bookinfo";
//url =url+"/Mobius/edu6/bookinfo/bookinfo"
//console.log(url);
//delete contentInstance by name
 //adn4.deleteContentInstance(AEOrigin,url);


//Delete latest contentInstance
// adn4.deleteContentInstanceLatest(AEOrigin,url);

//delete latest contentInstance
// adn4.deleteContentInstanceOldest(AEOrigin,url);
