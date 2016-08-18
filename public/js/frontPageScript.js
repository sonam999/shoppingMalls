var app=angular.module("BlankApp", ["ngMaterial"]);
app.controller("cntr",function($http, $scope){
  //  var locations=[];
  //  $http.get("public/jsons/location.json").then(function(err,data){
  //    if(err){
  //      console.log("error");
  //    }
  //    else{
  //      $scope.locations=data;
  //      console.log($scope.locations);
  //    }
  //  });

 var locationData=[
   {
     "location_name":"Bangalore",
     "mall_id":["blr-for-kor","blr-for-whi","blr-sho-kor"]
   },
   {
     "location_name":"Hydrabad",
     "mall_id":["blr-for-kor","blr-for-whi","blr-sho-kor"]
   },
   {
     "location_name":"Pune",
     "mall_id":["blr-for-kor","blr-for-whi","blr-sho-kor"]
   }
 ];
 var location_array=[];
 if(locationData.length!=0){
   for(var i=0;i<locationData.length;i++){
     var location_name=locationData[i].location_name;
     location_array.push(location_name);
   }
 }
 $scope.locations=location_array;
 console.log("location array aayega");
 console.log(location_array);

 var malls_id_array=[];
  var selected_location="Bangalore";
  if(selected_location!=null){
    for(var i=0;i<locationData.length;i++){
      if(selected_location==locationData[i].location_name){
        malls_id_array=locationData[i].mall_id;
      }
    }
  }

  // malls names
  var mall_details=[
  {
    "id":"blr-for-kor",
    "name":"Forum Mall-Koramangala",
    "Location":"Bangalore",
    "address":"Forum Mall,Hosur Road, Koramangala, Bangalore, Pin-560029",
    "contact":"080-8080808, 9083190312"
  },
  {
    "id":"blr-for-whi",
    "name":"Forum Mall-WhiteField",
    "Location":"Bangalore",
    "address":"Forum Mall, WhiteField, Bangalore, Pin-560029",
    "contact":"080-8080808, 9083190312",
    "cbs":"offer_id"
  },
  {
    "id":"blr-tot-mad",
    "name":"Total Mall-Madivala",
    "Location":"Bangalore",
    "address":"Total Mall,Hosur Road, Madivala, Bangalore, Pin-560029",
    "contact":"080-8080808, 9083190312"
  },
  {
    "id":"blr-sho-kor",
    "name":"ShopperStop-Koramangala",
    "Location":"Bangalore",
    "address":"Beside Forum Mall,Hosur Road, Koramangala, Bangalore, Pin-560029",
    "contact":"080-8080808, 9083190312"
  },
  {
    "id":"blr-pho-mah",
    "name":"Phoenix-Mahadevapura",
    "Location":"Bangalore",
    "address":"Phoenix Mall, Mahadevapura, Bangalore, Pin-560029",
    "contact":"080-8080808, 9083190312"
  },
  {
    "id":"blr-oas-kor",
    "name":"Oasis Mall-Koramangala",
    "Location":"Bangalore",
    "address":"Oasis Mall, Sony Signal, Koramangala, Bangalore, Pin-560029",
    "contact":"080-8080808, 9083190312"
  },
  {
    "id":"blr-cen-bel",
    "name":"Central Mall-Bellandur",
    "Location":"Bangalore",
    "address":"Central Mall, Bellandur, Bangalore, Pin-560029",
    "contact":"080-8080808, 9083190312"
  },
  {
    "id":"blr-gop-jpn",
    "name":"Gopalan Mall-J.P.Nagar",
    "Location":"Bangalore",
    "address":"Gopalan Mall, J.P.Nagar, Bangalore, Pin-560029",
    "contact":"080-8080808, 9083190312"
  },
  {
    "id":"blr-gop-krp",
    "name":"Gopalan Mall-K.R.Puram",
    "Location":"Bangalore",
    "address":"Gopalan Mall, K.R.Puram, Bangalore, Pin-560029",
    "contact":"080-8080808, 9083190312"
  },
  {
    "id":"che-for-kor",
    "name":"White Forum Mall-Vadapalani",
    "Location":"Chennai",
    "address":"Gopalan Mall, Vadapalani, Chennai ,pin-600001",
    "contact":"044-8080808, 9083190312"
  },
  {
    "id":"che-phe-vel",
    "name":"Phoenix Mall-Velachery",
    "Location":"Chennai",
    "address":"Phoenix Mall, Velachery, Chennai ,pin-600001",
    "contact":"044-8080808, 9083190312"
  },
  {
    "id":"hyd-gvk-jub",
    "name":"GVK Mall-Jubli Hills",
    "Location":"Hyderabad",
    "address":"GVK Mall, Jubli Hills, Hyderabad ,pin-500082",
    "contact":"040-8080808, 9083190312"
  },
  {
    "id":"hyd-ino-ban",
    "name":"Inorbit Mall-Banjara Hills",
    "Location":"Hyderabad",
    "address":"Inorbit Mall, Banjara Hills, Hyderabad ,pin-500082",
    "contact":"040-8080808, 9083190312"
  }
  ];
  var mall_names_array=[];
  if(malls_id_array.length!=0){
    for(var i=0;i<malls_id_array.length;i++){
       for(var j=0;j<mall_details.length;j++){
         if(malls_id_array[i]==mall_details[j].id){
           mall_names_array.push(mall_details[j].name);
         }
       }
    }
  }
  $scope.filter_malls=mall_names_array;
  console.log(mall_names_array);


  // filter brands
  var brands_details=[];
  var selected_mall=$scope.mall;
  var selected_mall_id;
  var brand_array=[];
  if(selected_mall!=null){
    for(var i=0;i<mall_details.length;i++){
      if(selected_mall==mall_details[i].name){
         selected_mall_id=mall_details[i].id;
      }
    }
    var mall_array=[];
    var brand_name;
    for(var j=0;j<brands_details.length;j++){
      mall_array=brands_details[j].mall_id;
      for(var k=0;k<mall_array.length;k++){
        if(selected_mall_id==mall_array[k]){
          brand_name=brands_details.name;
          brand_array.push(brand_name);
        }
      }
    }//end of for second loop
  }
  console.log(brand_array);
  $scope.brands=brand_array;








 $scope.data=["Forum","Phenix","Central","Star Bazar","DV Mall"];
 $scope.brandData=["Adidas","puma"];

 $scope.explore=false;
 $scope.openExploreFunction=function () {
   $scope.explore=true;
 };
 $scope.closeExploreFunction=function () {
   $scope.explore=false;
 };
});
