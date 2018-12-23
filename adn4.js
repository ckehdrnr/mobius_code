/* Copyright (c) 2017, Sejong University. All rights reserved

oneM2M ADN Profile 4 
This document contains the implementation code of oneM2M ADN profile 4. oneM2M is open standard for IoT. The purpose of this ADN pofile is Testing. ADN Profile 4 covers almost every test case related to AE in oneM2M standards.
Email : love9ly@gmail.com
*/

var request = require('request');
var cseName = "/Mobius"; // to concatenate with url in any request
var aeNameForUpdate = "/edu6";
var cnt_test = "/bookinfo";
var cinLatest = "/latest";
var cinOldest = "/oldest";
var cinName = "/bookinfo";
////////////////////////=================        ADN 4 =======================////////////////////

//############################# <CSEbase> ####################################################       1



//### Retrieve a <CSEbase> ressource  ### AE/REG/0001/0001
exports.getCSE = function(origin, url){
  console.log("retrieving CSE");
  var headers={
        'Accept': 'application/json',
        'X-M2M-RI' :12345,
        'X-M2M-Origin': origin

  };
  console.log(url+cseName);
  request({
      headers: headers,
      url:url+cseName,
      method:'GET'

  },function(error, response, body)
  {
    if(!error)
    {
      // console.log(body);
      var obj = JSON.parse(body);
       console.log("Response=",obj)
    }
    else
    {
      console.log("error is: "+ error);
    }
  });
}

//############################# <AE> ####################################################

//##### Create  #####      8



//### Create <AE> with mandatory attributes ### AE/REG/00002/00001
exports.createAE = function (origin,url,api_value,rr_value){
  console.log("Creating <AE> with mandatory attributes AE/REG/00002/00001");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=2'
    };
    request({
      headers: headers,
      url:url+cseName,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "api" : api_value,
                        "rr" : rr_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });

}


// ### Create <AE> with resourceName attribute ### AE/REG/00002/00002
exports.createAErn= function(origin,url,api_value,rr_value,rn_value){
  console.log("Creating <AE> with resourceName attributes AE/REG/0002/0002");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=2'
    };
    request({
      headers: headers,
      url:url+cseName,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "api" : api_value,
                        "rr" : rr_value,
                        "rn" : rn_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create <AE> with expirationTime attribute ### AE/REG/00002/00003
exports.createAEet = function(origin,url,api_value,rr_value,et_value){
  console.log("Creating <AE> with expirationTime attributes AE/REG/00002/00003");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=2'
    };
    request({
      headers: headers,
      url:url+cseName,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "api" : api_value,
                        "rr" : rr_value,
                        "et" : et_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create <AE> with labels ### AE/REG/00002/00004
exports.createAElbl=function (origin,url,api_value,rr_value,lbl_value){
  console.log("Creating <AE> with label attributes AE/REG/00002/00004");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=2'
    };
    request({
      headers: headers,
      url:url+cseName,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "api" : api_value,
                        "rr" : rr_value,
                        "lbl" : lbl_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}


// ### Create <AE> with applicationName  ### AE/REG/00002/00005
exports.createAEapn =function (origin,url,api_value,rr_value,apn_value){
  console.log("Creating <AE> with applicationName attributes AE/REG/00002/00005");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=2'
    };
    request({
      headers: headers,
      url:url+cseName,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "api" : api_value,
                        "rr" : rr_value,
                        "apn" : apn_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}


// ### Create <AE> with pointOfAccess  ### AE/REG/0002/0006
exports.createAEpoa =function (origin,url,api_value,rr_value,poa_value){
  console.log("Creating <AE> with pointOfAccess attributes AE/REG/0002/0006");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=2'
    };
    request({
      headers: headers,
      url:url+cseName,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "api" : api_value,
                        "rr" : rr_value,
                        "poa" : poa_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}


// ### Create <AE> with nodeLink ### AE/REG/0002/0007
exports.createAEnl = function(origin,url,api_value,rr_value,nl_value){
  console.log("Creating <AE> with nodelink attributes AE/REG/0002/0007");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=2'
    };
    request({
      headers: headers,
      url:url+cseName,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "api" : api_value,
                        "rr" : rr_value,
                        "nl" : nl_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create <AE> with contentSerialization ###  !!! AE/REG/0002/0008
exports.createAEcsz = function(origin,url,api_value,rr_value,csz_value){
  console.log("Creating <AE> with contentSerialization attributes AE/REG/0002/0008");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=2'
    };
    request({
      headers: headers,
      url:url+cseName,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "api" : api_value,
                        "rr" : rr_value,
                        "csz" : csz_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}


// ##### Update  #####          9

// ### Update <AE> with expirationTime ###  AE/REG/0002/0009
exports.updateAEet = function(origin,url,et_value){
  console.log("Updating <AE> with expirationTime attributes AE/REG/0002/0009");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'PUT',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "et" : et_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Update <AE> with labels ### AE/REG/0002/00010
exports.updateAElbl = function(origin,url,lbl_value){
  console.log("Updating <AE> with labels attributes AE/REG/0002/00010");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'PUT',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "lbl" : lbl_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}


// ### Update <AE> with applicationName  ###  AE/REG/0002/00011
exports.updateAEapn = function(origin,url,apn_value){
  console.log("Updating <AE> with applicationName attributes AE/REG/0002/00011");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'PUT',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "apn" : apn_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}


// ### Update <AE> with pointOfAccess  ###  AE/REG/0002/00012
exports.updateAEpoa = function(origin,url,poa_value){
  console.log("Updating <AE> with pointOfAccess attributes AE/REG/0002/00012");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'PUT',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "poa" : poa_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Update <AE> with nodeLink ###  !!!! AE/REG/0002/00013  nodelink is np
exports.updateAEnl = function(origin,url,nl_value){
  console.log("Updating <AE> with nodelink attributes AE/REG/0002/00013");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'PUT',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "nl" : nl_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}


// ### Update <AE> with requestReachability  ###  AE/REG/0002/00014
exports.updateAErr =function (origin,url,rr_value){
  console.log("Updating <AE> with requestReachability attributes AE/REG/0002/00014");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'PUT',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "rr" : rr_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Update <AE> with contentSerialization ###  AE/REG/0002/00015
exports.updateAEcsz= function(origin,url,csz_value){
  console.log("Updating <AE> with contentSerialization attributes AE/REG/0002/00015");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'PUT',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "csz" : csz_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Delete  <AE>  ###
exports.deleteAE = function(origin,url){
  console.log("Deleting <AE> AE/REG/0002/00016");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'DELETE'
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Retrieve  <AE>  ### AE/REG/0002/00017
exports.getAE = function(origin,url){
  console.log("Retrieving <AE> AE/REG/0002/00017");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'GET'
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}


// ############################# DMR/00001 <Container> ####################################################  15



// ### Create a <Container> with no attribute set  ### AE/DMR/00001/00001
exports.createContainer =  function(origin,url){
  console.log("Creating <Container> with no attribute set AE/DMR/00001/00001");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cnt":{
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create a <Container> with ressourceName ###  AE/DMR/00001/00002
exports.createContainerrn = function(origin,url,rn_value){
  console.log("Creating <Container> with resourceName AE/DMR/00001/00002");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cnt":{
                      "rn" : rn_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create a <Container> with expirationTime  ### AE/DMR/00001/00003
exports.createContaineret = function(origin,url,et_value){
  console.log("Creating <Container> with expirationTime AE/DMR/00001/00003");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cnt":{
                      "et" : et_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create a <Container> with labels  ### AE/DMR/00001/00004
exports.createContainerlbl = function(origin,url,lbl_value){
  console.log("Creating <Container> with labels AE/DMR/00001/00004");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cnt":{
                      "lbl" : lbl_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create a <Container> with creator ### AE/DMR/00001/00005
exports.createContainercr = function(origin,url,cr_value){
  console.log("Creating <Container> with creator AE/DMR/00001/00005");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cnt":{
                      "cr" : cr_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create a <Container> with maxNrOfInstances  ###
exports.createContainermni= function(origin,url,mni_value){
  console.log("Creating <Container> with maxNrOfInstances AE/DMR/00001/00006");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cnt":{
                      "mni" : mni_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create a <Container> with maxByteSize ### AE/DMR/00001/00007
exports.createContainermbs = function(origin,url,mbs_value){
  console.log("Creating <Container> with maxByteSize AE/DMR/00001/00007");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cnt":{
                      "mbs" : mbs_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create a <Container> with maxInstanceAge  ###  AE/DMR/00001/00008
exports.createContainermia=function(origin,url,mia_value){
  console.log("Creating <Container> with maxInstanceAge AE/DMR/00001/00008");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cnt":{
                      "mia" : mia_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Update <Container> with expirationTime  ###  AE/DMR/00001/00009
exports.updateContaineret= function(origin,url,et_value){
  console.log("Creating <Container> with expirationTime AE/DMR/00001/00009");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'PUT',
      body:
          JSON.stringify({
            "m2m:cnt":{
                      "et" : et_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Update <Container> with labels  ### AE/DMR/00001/00010
exports.updateContainerlbl = function(origin,url,lbl_value){
  console.log("Creating <Container> with labels AE/DMR/00001/00010");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'PUT',
      body:
          JSON.stringify({
            "m2m:cnt":{
                      "lbl" : lbl_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Update <Container> with maxNrOfInstances  ### AE/DMR/00001/00011
exports.updateContainermni = function(origin,url,mni_value){
  console.log("Creating <Container> with labels AE/DMR/00001/00011");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'PUT',
      body:
          JSON.stringify({
            "m2m:cnt":{
                      "mni" : mni_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Update <Container> with maxByteSize ### AE/DMR/00001/00012
exports.updateContainermbs = function(origin,url,mbs_value){
  console.log("Creating <Container> with maxByteSize AE/DMR/00001/00012");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'PUT',
      body:
          JSON.stringify({
            "m2m:cnt":{
                      "mbs" : mbs_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Update <Container> with maxInstanceAge  ### AE/DMR/00001/00013
exports.updateContainermia=function(origin,url,mia_value){
  console.log("Creating <Container> with maxInstanceAge AE/DMR/00001/00013");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'PUT',
      body:
          JSON.stringify({
            "m2m:cnt":{
                      "mia" : mia_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}


// ### Delete <Container>  ### AE/DMR/00001/00014
exports.deleteContainer=function(origin,url){
  console.log("Deleting <Container> AE/DMR/00001/00014");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'DELETE',
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### retrieve <Container>  ### AE/DMR/00001/00015
exports.getContainer=function(origin,url){
  console.log("Retrieving <Container> AE/DMR/00001/00015");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'GET',
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}



// ############################# <ContentInstance> ####################################################   13



// ### Create a <ContentInstance> with mandatory attributes  ### AE/DMR/00002/00001
exports.createContentInstance = function(origin,url,con_value){
  console.log("Creating <ContentInstance> with mandatory attributes AE/DMR/00002/00001");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=4'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cin": {
                      "con":con_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create a <ContentInstance> with resourceName  ### AE/DMR/00002/00002
exports.createContentInstancern = function(origin,url,con_value,rn_value){
  console.log("Creating <ContentInstance> with resourceName attributes AE/DMR/00002/00002");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=4'
    };
    request({
      headers: headers,
      url:url,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cin": {
                      "con":con_value,
                      "rn": rn_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create a <ContentInstance> with expirationTime  ### AE/DMR/00002/00003
exports.createContentInstanceet = function(origin,url,con_value,et_value){
  console.log("Creating <ContentInstance> with expirationTime attributes AE/DMR/00002/00003");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=4'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cin": {
                      "con":con_value,
                      "et":et_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create a <ContentInstance> with label ###  AE/DMR/00002/00004
exports.createContentInstancelbl = function(origin,url,con_value,lbl_value){
  console.log("Creating <ContentInstance> with labels attributes AE/DMR/00002/00004");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=4'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cin": {
                      "con":con_value,
                      "lbl":lbl_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create a <ContentInstance> with creator ### AE/DMR/00002/00005
exports.createContentInstancecr = function(origin,url,con_value,cr_value){
  console.log("Creating <ContentInstance> with creator attributes AE/DMR/00002/00005");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=4'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cin": {
                      "con":con_value,
                      "cr":cr_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create a <ContentInstance> with contentInfo ###  AE/DMR/00002/00006
exports.createContentInstancecnf = function(origin,url,con_value,cnf_value){
  console.log("Creating <ContentInstance> with contentInfo attributes AE/DMR/00002/00006");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=4'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cin": {
                      "con":con_value,
                      "cnf":cnf_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Create a <ContentInstance> with contentRef  ### AE/DMR/00002/00007
exports.createContentInstanceconr = function(origin,url,con_value,conr_value){
  console.log("Creating <ContentInstance> with contentRef attributes AE/DMR/00002/00007");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=4'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cin": {
                      "con":con_value,
                      "conr":conr_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Get a <ContentInstance> ### !!!!!!!!!!! AE/DMR/00002/00008
exports.getContentInstance = function(origin,url){
  //console.log("Retrieve <ContentInstance>  AE/DMR/00002/00008");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      //url:url+cseName+aeNameForUpdate+cnt_test+cinName,
	url:url,      
	method:'GET'
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Get Oldest <ContentInstance>  ### AE/DMR/00002/00009
exports.getContentInstanceOldest = function(origin,url){
  console.log("Retrieve <ContentInstance>  AE/DMR/00002/00009");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      url:url+cinOldest,
//+cseName+aeNameForUpdate+cnt_test,
      method:'GET'
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Get latest <ContentInstance>  ### AE/DMR/00002/00010
exports.getContentInstanceLatest = function(origin,url){
  console.log("Retrieve <ContentInstance>  AE/DMR/00002/00010");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test+cinLatest,
      method:'GET'
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Delete a <ContentInstance>  ### !!!!!!!! AE/DMR/00002/00011
exports.deleteContentInstance = function(origin,url){
  console.log("Deleting <Container> AE/DMR/00002/00011");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      //url:url+cseName+aeNameForUpdate+cnt_test+cinName,
	url:url,      
	method:'DELETE',
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Delete Oldest <ContentInstance> ### AE/DMR/00002/00012
exports.deleteContentInstanceOldest = function(origin,url){
    console.log("Deleting <Container> AE/DMR/00002/00012");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test+cinOldest,
      method:'DELETE',
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

// ### Delete Latest <ContentInstance> ### AE/DMR/00002/00013
exports.deleteContentInstanceLatest = function(origin,url){
console.log("Deleting <Container> AE/DMR/00002/00013");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test+cinLatest,
      method:'DELETE',
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}
