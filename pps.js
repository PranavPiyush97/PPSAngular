ppsConsole=angular.module('ppsConsole',['ngRoute','ngResource'])
ppsConsole.config(function($routeProvider)
                 {
     $routeProvider
    .when('/',
         {
        templateUrl:'Home.html'
    })
    .when('/login',
         {
        templateUrl:'AdminLogin.html',
         controller:'LoginController'
     })
     .when('/admin',
         {
        templateUrl:'PPSconsole.html'
    })
     .when('/subsdata',
         {
        templateUrl:'subscribersData.html',
         controller:'subscribersDataController'
    })
     .when('/addadmin',
         {
        templateUrl:'AddAdmin.html'
    })
     .when('/changepass',
         {
        templateUrl:'ChangePassword.html'
    })
     .when('/searchsubs',
         {
        templateUrl:'SearchSubs.html',
        controller:'SearchSubsController'
     })
	 .when('/others',
         {
        templateUrl:'Others.html',
        controller:'OthersController'
     })
     .when('/callhunting',
         {
        templateUrl:'CallHunting.html',
         controller:'callhuntingController'
    })
    .when('/dnd',
         {
        templateUrl:'DND.html',
         controller:'DNDController'
    })
	 .when('/HZ',
         {
        templateUrl:'HomeZone.html',
         controller:'HomeZoneController'
    })
	 .when('/YZ',
         {
        templateUrl:'YieldZonePriority.html',
         controller:'YieldZoneController'
    })
	 .when('/whitelist',
         {
        templateUrl:'Whitelist.html',
         controller:'WhitelistController'
    })
	 .when('/blacklist',
         {
        templateUrl:'Blacklist.html',
         controller:'BlacklistController'
    })
	 .when('/cellManagement',
         {
        templateUrl:'CellManagement.html',
         controller:'CellManagementController'
    })
	.when('/yzHoliday',
         {
        templateUrl:'YzHoliday.html',
         controller:'YzHolidayController'
    })
	.when('/neighbouringZone',
         {
        templateUrl:'NeighbouringZone.html',
         controller:'NeighbouringZoneController'
    })
	.when('/RZ',
         {
        templateUrl:'RegionalZone.html',
         controller:'RegionalZoneController'
    })
	.when('/cellOccupancyDiscount',
         {
        templateUrl:'CellOccupancyDiscount.html',
         controller:'CellOccupancyDiscountController'
    })
	.when('/globalDiscount',
         {
        templateUrl:'GlobalDiscount.html',
         controller:'GlobalDiscountController'
    })
	.when('/lacCellDayDiscount',
         {
        templateUrl:'LacCellDAYDiscount.html',
         controller:'LacCellDayDiscountController'
    })
		 .when('/lacCellDiscount',
         {
        templateUrl:'LacCellDiscount.html',
         controller:'LacCellDiscountController'
    })
	    .when('/zoneDateTimeDiscount',
         {
        templateUrl:'ZoneDateTime.html',
         controller:'ZoneDateTimeController'
    })
	 .when('/zoneDayDiscount',
         {
        templateUrl:'ZoneDayDiscount.html',
         controller:'ZoneDayDiscountController'
    })
	 .when('/zoneDiscount',
         {
        templateUrl:'ZoneDiscount.html',
         controller:'ZoneDiscountController'
    })
	 .when('/dialingRestriction',
         {
        templateUrl:'DialingRestriction.html',
         controller:'DialingRestrictionController'
    })
	.when('/lacCellDateDiscount',
         {
        templateUrl:'LacCellDateTime.html',
         controller:'LacCellDateTimeController'
    })
	.when('/yzSubscriber',
         {
        templateUrl:'YZSubscriber.html',
         controller:'YZSubscriberController'
    })
     .when('/ff',
         {
        templateUrl:'Friends&Family.html',
         controller:'FFController'
   
    });
    
});


//SERVICES
ppsConsole.service('msisdnService',function()
					{
	this.msisdn="";
});



//CONTROLLERS
ppsConsole.controller('SearchSubsController',['$scope','msisdnService','$location' ,function($scope,msisdnService,$location)
					 {
						 $scope.msisdn=msisdnService.msisdn;
                         $scope.regE=/^[1-9]{1}[0-9]{9}$/;
						 $scope.validation=function()
						 {
							 if($scope.msisdn==undefined){
							 alert("MSISDN length must be a 10 number");
                             return;
                         }else{//href="#/subsdata"
                                 $location.path('/subsdata');
                             }
						 };
						  $scope.$watch('msisdn',function()
                                      {
                             msisdnService.msisdn=$scope.msisdn;
                         });
	
}]);
ppsConsole.controller('subscribersDataController',['$scope','msisdnService',function($scope,msisdnService)
                     {
						 
	$scope.msisdn=msisdnService.msisdn;
						 
   $scope.onCheckFF=function()
    {
        if(document.getElementById("F&F").checked == true)
                {
                    if(confirm("Cost for F&F is "))
                        { 
                        document.getElementById("F&F").checked==true;
                            window.location='#/ff';
                        }
                    else
                        {
                            document.getElementById("F&F").checked=false;
                        }
                }
    }
   $scope.onCheckHZ=function()
        {
            if(document.getElementById("HZ").checked == true)
                {
                    if(confirm("Cost for this Home Zone is "))
                        {
                         document.getElementById("HZ").checked=true;
							 window.location='#/HZ';
                        }
                    else
                        {
                            document.getElementById("HZ").checked=false;
                        }
                }
        }
        $scope.onCheckRZ=function()
        {
            if(document.getElementById("RZ").checked == true)
                {
                    if(confirm("Cost for  Regional Zone is "))
                        {
                            
                         document.getElementById("RZ").checked=true;
                         window.location='#/RZ';
                        }
                    else
                        {
                            document.getElementById("RZ").checked=false;
                        }
                }
        }
        $scope.onCheckYZ=function()
        {
            if(document.getElementById("YZ").checked == true)
                {
                    if(confirm("Cost for  Yield Zone is "))
                        {
                         document.getElementById("YZ").checked=true; 
                        }
                    else
                        {
                            document.getElementById("YZ").checked=false;
                        }
                }
        }
       $scope.onCheckPingService=function()
        {
            if(document.getElementById("pingService").checked == true)
                {
                    if(confirm("Cost for PingService is "))
                        {
                         document.getElementById("pingService").checked=true;
                        }
                    else
                        {
                            document.getElementById("pingService").checked=false;
                        }
                }
        }
        $scope.onCheckPingNotification=function()
        {
            if(document.getElementById("pingNotification").checked == true)
                {
                    if(confirm("Cost for PingNotification is "))
                        {
                         document.getElementById("pingNotification").checked=true;  
                        }
                    else
                        {
                            document.getElementById("pingNotification").checked=false;
                        }
                }
        }
         $scope.onCheckDND=function()
        {
            if(document.getElementById("DND").checked == true)
                {
                    if(confirm("Cost for this DND is "))
                        {
                            document.getElementById("DND").checked=true;
                            window.location='#/dnd';
                        }
                    else
                        {
                            document.getElementById("DND").checked=false;
                        }
                }
        }
        $scope.onCheckCallHunting=function()
        {
            if(document.getElementById("callHunting").checked == true)
                {
                    if(confirm("Cost for Call Hunting/Diversion is "))
                        {
                         document.getElementById("callHunting").checked=true;  
                            window.location='#/callhunting';
                        }
                    else
                        {
                            document.getElementById("callHunting").checked=false;
                        }
                }
        }
         $scope.onCheckWhitelist=function()
        {
            if(document.getElementById("whitelist").checked == true)
                {
                    if(confirm("Cost for Pay4Me Whitelist is "))
                        {
                           document.getElementById("whitelist").checked=true;
							window.location='#/whitelist';
                        }
                    else
                        {
                            document.getElementById("whitelist").checked=false;
                        }
                }
        }
        $scope.onCheckBlacklist=function()
        {
            if(document.getElementById("blacklist").checked == true)
                {
                    if(confirm("Cost for Pay4Me Blacklist is "))
                        {
                           document.getElementById("blacklist").checked=true; 
							window.location='#/blacklist';
                        }
                    else
                        {
                            document.getElementById("blacklist").checked=false;
                        }
                }
        }
		$scope.onCheckOthers=function()
        {
            if(document.getElementById("others").checked == true)
                {
                    window.location='#/others';
                }
        }
}]);

//OTHERS CONTROLLER

ppsConsole.controller('OthersController',['$scope','msisdnService',function($scope,msisdnService)
		{
					$scope.msisdn=msisdnService.msisdn;
			$scope.onCheckYzDiscountPriority=function()
			{
				if(document.getElementById("yzDiscountPriority").checked==true)
					{
						document.getElementById("yzDiscountPriority").checked==true;
						window.location='#/YZ';
					}
				else
					document.getElementById("yzDiscountPriority").checked==false;
			}
			
			$scope.onCheckCellManagement=function()
			{
				if(document.getElementById("cellManagement").checked==true)
					{
						document.getElementById("cellManagement").checked==true;
						window.location='#/cellManagement';
					}
				else
					document.getElementById("cellManagement").checked==false;
			}
			$scope.onCheckYzHoliday=function()
			{
				if(document.getElementById("yzHoliday").checked==true)
					{
						document.getElementById("yzHoliday").checked==true;
						window.location='#/yzHoliday';
					}
				else
					document.getElementById("yzHoliday").checked==false;
				
			}
			$scope.onCheckNeighbouringZone=function()
			{
				if(document.getElementById("neighbouringZone").checked==true)
					{
						document.getElementById("neighbouringZone").checked==true;
						window.location='#/neighbouringZone';
					}
				else
					document.getElementById("neighbouringZone").checked==false;
				
			}
            
			$scope.onCheckCellOccupancyDiscount=function()
			{
				if(document.getElementById("cellOccupancyDiscount").checked==true)
					{
						document.getElementById("cellOccupancyDiscount").checked==true;
						window.location='#/cellOccupancyDiscount';
					}
				else
					document.getElementById("cellOccupancyDiscount").checked==false;
				
			}
			$scope.onCheckGlobalDiscount=function()
			{
				if(document.getElementById("globalDiscount").checked==true)
					{
						document.getElementById("globalDiscount").checked==true;
						window.location='#/globalDiscount';
					}
				else
					document.getElementById("globalDiscount").checked==false;
				
			}
			$scope.onCheckLacCellDayDiscount=function()
			{
				if(document.getElementById("lacCellDayDiscount").checked==true)
					{
						document.getElementById("lacCellDayDiscount").checked==true;
						window.location='#/lacCellDayDiscount';
					}
				else
					document.getElementById("lacCellDayDiscount").checked==false;
				
			}
			$scope.onCheckLacCellDiscount=function()
			{
				if(document.getElementById("lacCellDiscount").checked==true)
					{
						document.getElementById("lacCellDiscount").checked==true;
						window.location='#/lacCellDiscount';
					}
				else
					document.getElementById("lacCellDiscount").checked==false;	
				
			}
			$scope.onCheckZoneDateTimeDiscount=function()
			{
				if(document.getElementById("zoneDateTimeDiscount").checked==true)
					{
						document.getElementById("zoneDateTimeDiscount").checked==true;
						window.location='#/zoneDateTimeDiscount';
					}
				else
					document.getElementById("zoneDateTimeDiscount").checked==false;	
				
				
			}
			$scope.onCheckZoneDayDiscount=function()
			{
				if(document.getElementById("zoneDayDiscount").checked==true)
					{
						document.getElementById("zoneDayDiscount").checked==true;
						window.location='#/zoneDayDiscount';
					}
				else
					document.getElementById("zoneDayDiscount").checked==false;	
				
			}
			$scope.onCheckZoneDiscount=function()
			{
				if(document.getElementById("zoneDiscount").checked==true)
					{
						document.getElementById("zoneDiscount").checked==true;
						window.location='#/zoneDiscount';
					}
				else
					document.getElementById("zoneDiscount").checked==false;	
				
				
			}
			$scope.onCheckDialingRestriction=function()
			{
				if(document.getElementById("dialingRestriction").checked==true)
					{
						document.getElementById("dialingRestriction").checked==true;
						window.location='#/dialingRestriction';
					}
				else
					document.getElementById("dialingRestriction").checked==false;	
				
			}
			$scope.onCheckLacCellDateDiscount=function()
			{
				if(document.getElementById("lacCellDateDiscount").checked==true)
					{
						document.getElementById("lacCellDateDiscount").checked==true;
						window.location='#/lacCellDateDiscount';
					}
				else
					document.getElementById("lacCellDateDiscount").checked==false;	
				
			}
			$scope.onCheckYzSubscriber=function()
			{
				if(document.getElementById("yzSubscriber").checked==true)
					{
						document.getElementById("yzSubscriber").checked==true;
						window.location='#/yzSubscriber';
					}
				else
					document.getElementById("yzSubscriber").checked==false;	
				
			}
			
											 
											 
											 
		}]);

ppsConsole.controller('CellManagementController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
	{
        
		$scope.msisdn=msisdnService.msisdn;
		$scope.rows =[
    ];
        //imp for validation                      
        $scope.regEx = /^[0-9]{0,}$/;  
    
    $scope.addRow = function() 
	{
      $scope.rows.push({cgiId:'',latitude:'',longitude:'' ,radius:'', row_Id:'',OpcoId:'',ServiceKeyId:''})
    }
    
    $scope.removeRow = function(cgiId)
	{
		$http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/cellid/'+cgiId +'/Cell'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
		
    }
    
    $scope.submit = function(cgiId,latitude,longitude,radius,row_Id,OpcoId,ServiceKeyId) 
	{
	var postObject = new Object();
    postObject.cgiId= cgiId;
	postObject.firstActivationTimeStamp;
    postObject.lastActivationTimeStamp;
    postObject.radius =radius;
    postObject.latitude =latitude;
    postObject.longitude =longitude;
	postObject.row_Id=row_Id;
	postObject.opco_Id=OpcoId
	postObject.serviceKey_Id=ServiceKeyId
    console.log(cgiId,radius,latitude,longitude,row_Id,OpcoId,ServiceKeyId);
        
    if(cgiId==undefined || radius==undefined || latitude==undefined || longitude==undefined || row_Id==undefined || OpcoId==undefined || ServiceKeyId==undefined){
        alert("Data can't be entered! enter valid inputs");
        return;
    }    
        
    $http({
        url: 'http://172.25.26.183:6900/pps/cellid/'+postObject.cgiId+'/Cell',
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
        alert("Data successfully entered for cellId "+postObject.cgiId);
    }).error(function(error){
        $scope.error = error;
        alert("Data can't be entered! Enter valid inputs");
    });
      
    };
	$scope.getData=function()
	{
		$http.get("http://172.25.26.183:6900/pps/cellid/Cell")
  .then(function(response) {
      $scope.abc = response.data;
      });
		
	}
	
	
	}]).directive('onFocus', function($timeout) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.onFocus, function (newValue) {
            if (newValue) {
                $timeout(function () {
                    //element.focus();
                }, 0, false);
            }
        }); 
      };    
});

ppsConsole.controller('YzHolidayController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
	{
	 $scope.msisdn=msisdnService.msisdn;
	 $scope.rows =[    
    ];
    
    $scope.regEx4=/^(([1-2][0-9])|(0[1-9])|(3[0-1]))-((1[0-2])|(0[1-9]))-[0-9]{4}$/g;
    $scope.regEx2="^[a-zA-Z ]*$";
     $scope.r=[]
    $scope.date;
	$scope.description;

                         
    $scope.addRow = function() 
	{
    $scope.rows.push({date:'',description:''});
    };
    
    $scope.removeRow = function(date)
	{ 
		$http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/yieldzone/'+date+'/yzHoliday'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
			
    };
    
    
    $scope.submit = function(date,description) 
	{
    var postObject = new Object();
    postObject.date = date;
    postObject.description =description;
    
    console.log(date,description);
    
    if(date==undefined || description==undefined){
        alert("Data can't be entered! enter date in dd-mm-yyyy and enter valid text");
        return;
    }
    $http({
        url: 'http://172.25.26.183:6900/pps/yieldzone/'+postObject.date+'/yzHoliday',
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
        alert("Data entered successfully on date "+postObject.date);
    }).error(function(error){
        $scope.error = error;
        alert("Data can't be entered! Enter date as dd-mm-yyyy and description as text!");
    });
   
    };
	$scope.getdata=function()
	{
 $http.get("http://172.25.26.183:6900/pps/yieldzone/yzHoliday")
  .then(function(response) {
      $scope.abc = response.data;
	   
      });	
	};
												
											
	}]);


ppsConsole.controller('NeighbouringZoneController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
	{
		$scope.rows =[
         
    ];
    
    $scope.regEx1=/^[0-9]{1,}$/;
    $scope.regEx3=/^\d*\.?\d*$/;
    $scope.cellId;
	$scope.neighborCellId;
    $scope.discount;
                         
    $scope.addRow = function() 
	{
    $scope.rows.push({cellId:'',neighborCellId:'',discount:''});
    };
    
    $scope.removeRow = function(cellId)
	{   
		$http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/yieldzone/'+cellId+'/yzNeighbouringZoneDiscount'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
    };
    
    
    $scope.submit = function(cellId,neighborCellId,discount) 
	{
	var postObject = new Object();
    postObject.cellId = cellId;
    postObject.neighborCellId =neighborCellId;
	postObject.discount=discount;
    console.log(cellId,neighborCellId,discount);
    if(neighborCellId==null || discount==null || cellId==undefined){
        alert("Data can't be entered! enter valid input");
        return;
    }

    $http({
        url: 'http://172.25.26.183:6900/pps/yieldzone/'+postObject.cellId+'/yzNeighbouringZoneDiscount',
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
        alert("Data Entered Successfully for cellid "+postObject.cellId);
    }).error(function(error){
        $scope.error = error;
        alert("Data can't be entered! Enter valid inputs");
    });
    };
$scope.getdata=function()
{
 $http.get("http://172.25.26.183:6900/pps/yieldzone/yzNeighbouringZoneDiscount")
  .then(function(response) {
      $scope.abc = response.data;
	   
      });	 
};
													   
	}]);

ppsConsole.controller('RegionalZoneController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
{
	$scope.rows =[
         
    ];
    
    $scope.msisdn=msisdnService.msisdn;
	$scope.activationStatus;
    $scope.activationCounter;
    $scope.firstActivationTimeStamp="";
    $scope.lastActivationTimeStamp="";
                         
    $scope.addRow = function() 
	{
    $scope.rows.push({msisdn:'',activationStatus:'',activationCounter:''});
    };
    
    $scope.removeRow = function(msisdn)
	{
		$http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/yieldzone/'+msisdn+'/rzSubscriber'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
    };
    
    $scope.submit = function(msisdn,activationStatus,activationCounter) 
	{
    var postObject = new Object();
    postObject.msisdn=msisdn;
    postObject.activationStatus=activationStatus;
    postObject.firstActivationTimeStamp;
    postObject.lastActivationTimeStamp;
    postObject.activationCounter=activationCounter;
  
    

    $http({
        url: 'http://172.25.26.183:6900/pps/yieldzone/'+postObject.msisdn+'/rzSubscriber',
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
        alert("posted successfully");
    }).error(function(error){
        $scope.error = error;
        alert("data for msisdn already present");
    }); 
        
    };
$scope.getdata=function()
{
 $http.get('http://172.25.26.183:6900/pps/yieldzone/'+$scope.msisdn+'/rzSubscriber')
  .then(function(response) {
      $scope.x = response.data;
	   
      });	 
};
}]);



ppsConsole.controller('CellOccupancyDiscountController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
{
	 $scope.rows =[    
    ];
    
    $scope.regEx1=/^[0-9]{1,}$/;
    $scope.regEx2=/^[a-zA-Z ]*$/;
    $scope.regEx3=/^\d*\.?\d*$/;
     
     $scope.r=[]
    $scope.product;
	$scope.discount;
    $scope.calltype;
    $scope.minoccupancy;
    $scope.maxoccupancy;

                         
    $scope.addRow = function() 
	{
    $scope.rows.push({product:'',discount:'',calltype:'',minoccupancy:'',maxoccupancy:''});
    };
    
    $scope.removeRow = function(product)
	{
		$http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/yieldzone/'+product+'/YzOccupancyDiscount'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
		
    };
    
    //MORETODO
    $scope.submit = function(product,discount,calltype,minoccupancy,maxoccupancy) 
	{
        
    var postObject = new Object();
    postObject.product = product;
    postObject.discount = discount;
    postObject.calltype =calltype;
    postObject.minoccupancy =minoccupancy;
    postObject.maxoccupancy = maxoccupancy;
    
    if(product==undefined || discount==undefined || maxoccupancy==undefined || minoccupancy==undefined){
        alert("Data can't be entered! Enter valid inputs");
        return;
    }
    console.log(product,discount,maxoccupancy,minoccupancy);
    $http({
        url: 'http://172.25.26.183:6900/pps/yieldzone/'+postObject.product+'/YzOccupancyDiscount', //change it to dynamic date captures
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
        alert("Data Succefully Entered for product "+postObject.product);
    }).error(function(error){
        $scope.error = error;
        alert("Data can't be entered! Enter valid inputs");
    });
    };
$scope.getdata=function()
{
 $http.get("http://172.25.26.183:6900/pps/yieldzone/YzOccupancyDiscount")
  .then(function(response) {
      $scope.abc = response.data;
	   
      });	 
};
															
													
}]);

ppsConsole.controller('GlobalDiscountController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
{
	 $scope.rows =[    
    ];
     
    $scope.regEx2="^[a-zA-Z ]*$";
    $scope.regEx3=/^\d*\.?\d*$/;
     $scope.r=[]
    $scope.product;
	$scope.discount;
    $scope.callType;

                         
    $scope.addRow = function() 
	{
    $scope.rows.push({product:'',discount:'',callType:''});
    };
    
    $scope.removeRow = function(product)
	{   
      $http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/yieldzone/'+product+'/yzGlobalDiscount'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
    };
    $scope.submit = function(product,discount,callType) 
	{
    var postObject = new Object();
    postObject.product = product;
    postObject.discount = discount;
    postObject.callType =callType;
    console.log(product,discount);
        
    if(discount==undefined || product==undefined){
        alert("Data can't be entered! Enter valid inputs");
        return;
    }
    $http({
        url: 'http://172.25.26.183:6900/pps/yieldzone/'+postObject.product+'/yzGlobalDiscount', //change it to dynamic date captures
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
        alert("Data entered Successfully for product "+postObject.product);
    }).error(function(error){
        $scope.error = error;
        alert("Data can't be entered! Enter valid inputs");
    });
     
    };
	$scope.getdata=function()
	{
 $http.get("http://172.25.26.183:6900/pps/yieldzone/yzGlobalDiscount")
  .then(function(response) {
      $scope.abc = response.data;
	   
      });	
						
	};
													 
}]);

ppsConsole.controller('LacCellDayDiscountController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
	 {
		 $scope.rows =[    
    ];
    
    $scope.regEx1=/^[0-9]{1,}$/;
    $scope.regEx2="^[a-zA-Z ]*$";
    $scope.regEx3=/^\d*\.?\d*$/;
     $scope.r=[]
    $scope.cellid;
	$scope.lac;
    $scope.product;
    $scope.discount;
    $scope.calltype;
    $scope.daytype;
    $scope.endtime="";
    $scope.starttime="";
                         
    $scope.addRow = function() 
	{
    $scope.rows.push({cellid:'',lac:'',product:'',discount:'',calltype:'',daytype:''});
    };
    
    $scope.removeRow = function(cellid)
	{   
      $http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/yieldzone/'+cellid+'/YzLacCellDayDiscount'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
    };
    
    //MORETODO
    $scope.submit = function(cellid,lac,product,discount,calltype,daytype) 
	{    
    var postObject = new Object();
    postObject.cellid = cellid;
    postObject.lac = lac;
    postObject.product =product;
    postObject.discount =discount;
    postObject.calltype = calltype;
    postObject.daytype = daytype;
    postObject.endtime="";
    postObject.starttime="";
    if(cellid==undefined || lac==undefined ||product==undefined ||discount==undefined){
        alert("Data can't be Entered! Enter valid inputs");
        return;
    }
  
    console.log(cellid,lac,product,discount);
    $http({
        url: 'http://172.25.26.183:6900/pps/yieldzone/'+postObject.cellid+'/YzLacCellDayDiscount',//change it to dynamic date captures
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
        alert("Data Entered Successfully in cell id "+postObject.cellid);
    }).error(function(error){
        $scope.error = error;
        alert("Data can't be entered! Enter valid inputs");
    });
    };
$scope.getdata=function()
{
 $http.get("http://172.25.26.183:6900/pps/yieldzone/YzLacCellDayDiscount")
  .then(function(response) {
      $scope.abc = response.data;
	   
      });	 
};
	 }]);

ppsConsole.controller('LacCellDiscountController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
	{
		$scope.rows =[    
    ];
    $scope.regEx1=/^[0-9]{1,}$/;
    $scope.regEx2="^[a-zA-Z ]*$";
    $scope.regEx3=/^\d*\.?\d*$/;
     
     $scope.r=[]
    $scope.cellid;
	$scope.lac;
    $scope.product;
    $scope.discount;
    $scope.calltype;

                         
    $scope.addRow = function() 
	{
    $scope.rows.push({cellid:'',lac:'',product:'',discount:'',calltype:''});
    };
    
    $scope.removeRow = function(cellid)
	{   
      $http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/yieldzone/'+cellid+'/YzLacCellDiscount'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
    };
    
    $scope.submit = function(cellid,lac,product,discount,calltype) 
	{    
    var postObject = new Object();
    postObject.cellid = cellid;
    postObject.lac = lac;
    postObject.product =product;
    postObject.discount =discount;
    postObject.calltype = calltype;
    console.log(cellid,lac,product,discount);
        
    if(cellid==undefined || lac==undefined || product==undefined || discount==undefined){
        alert("Data can't be entered! Enter valid Input");
        return;
    }
        
    $http({
        url: 'http://172.25.26.183:6900/pps/yieldzone/'+postObject.cellid+'/YzLacCellDiscount',//change it to dynamic date captures
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
        alert("Data succefully entered in cellid "+postObject.cellid);
    }).error(function(error){
        $scope.error = error;
        alert("Data can't be entered! Enter valid inputs");
    });
    };
$scope.getdata=function()
 {
 $http.get("http://172.25.26.183:6900/pps/yieldzone/YzLacCellDiscount")
  .then(function(response) {
      $scope.abc = response.data;
	   
      });	 
						 
};
													  
												  
	}]);

ppsConsole.controller('ZoneDateTimeController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
{
	 $scope.rows =[    
    ];
     
     $scope.r=[]
    $scope.product;
    $scope.zoneid;
    $scope.discount;
    $scope.calltype;
    $scope.startdate;
    $scope.enddate;
    $scope.starttime;
    $scope.endtime;

                         
    $scope.addRow = function() 
	{
    $scope.rows.push({product:'',zoneid:'',discount:'',calltype:'',startdate:'',enddate:'',starttime:'',endtime:''});
    };
    
    $scope.removeRow = function(zoneid)
	{   
      $http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/yieldzone/'+zoneid+'/YzZoneDateTimeDiscount'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
    };
 
    $scope.submit = function(product,zoneid,discount,calltype,startdate,enddate,starttime,endtime) 
	{
    var postObject = new Object();
    postObject.product =product;
    postObject.zoneid=zoneid;
    postObject.discount =discount;
    postObject.calltype = calltype;
    postObject.endtime=endtime;
    postObject.enddate=enddate;
    postObject.starttime=starttime;   
    postObject.startdate=startdate;
  

    $http({
        url: 'http://172.25.26.183:6900/pps/yieldzone/'+postObject.zoneid+'/YzZoneDateTimeDiscount',
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
    }).error(function(error){
        $scope.error = error;
    });
     
    };
 $scope.getdata=function()
{
 $http.get("http://172.25.26.183:6900/pps/yieldzone/YzZoneDateTimeDiscount")
  .then(function(response) {
      $scope.abc = response.data;
	   
      });	
 };	
	
}]);

ppsConsole.controller('ZoneDayDiscountController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
 {
	 $scope.rows =[    
    ];
     
    $scope.regEx1=/^[0-9]{1,}$/;
    $scope.regEx2="^[a-zA-Z ]*$";
    $scope.regEx3=/^\d*\.?\d*$/;
    $scope.r=[]
    $scope.product;
    $scope.discount;
    $scope.calltype;
    $scope.zoneid;
    $scope.daytype;
    $scope.endtime="";
    $scope.starttime="";
                         
    $scope.addRow = function() 
	{
    $scope.rows.push({product:'',discount:'',calltype:'',zoneid:'',daytype:''});
    };
    
    $scope.removeRow = function(zoneid)
	{   
      $http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/yieldzone/'+zoneid+'/YzZoneDayDiscount'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
    };
    
    $scope.submit = function(product,discount,zoneid,calltype,daytype) 
	{
    var postObject = new Object();
    postObject.product =product;
    postObject.discount =discount;
    postObject.calltype = calltype;
    postObject.zoneid=zoneid;
    postObject.daytype = daytype;
    postObject.endtime="";
    postObject.starttime="";
  
    console.log(product,discount,zoneid);
        
    if(product==undefined || zoneid==undefined || discount==undefined){
        alert("Data can't be entered! Enter valid inputs");
    }
        
    $http({
        url: 'http://172.25.26.183:6900/pps/yieldzone/'+postObject.zoneid+'/YzZoneDayDiscount',
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
        alert("Data successfully Entered for zone id "+postObject.zoneid);
    }).error(function(error){
        $scope.error = error;
        alert("Failed to enter data! Enter valid inputs");
    });
        
    };
$scope.getdata=function()
{
 $http.get("http://172.25.26.183:6900/pps/yieldzone/YzZoneDayDiscount")
  .then(function(response) {
      $scope.abc = response.data;
	   
      });	 
};
												 
 }]);

ppsConsole.controller('ZoneDiscountController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
{
	$scope.rows =[    
    ];
     
    $scope.regEx1=/^[0-9]{1,}$/;
    $scope.regEx2=/^[a-zA-Z ]*$/;
    $scope.regEx3=/^\d*\.?\d*$/;
    
     $scope.r=[]
    $scope.product;
    $scope.discount;
    $scope.calltype;
    $scope.zoneid;
    $scope.daytype;
    $scope.endtime="";
    $scope.starttime="";
                         
    $scope.addRow = function() 
	{
    $scope.rows.push({zoneid:'',product:'',discount:'',calltype:'',daytype:''});
    };
    
    $scope.removeRow = function(zoneid)
	{   
       $http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/yieldzone/'+zoneid+'/YzZoneDiscount'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
    };
  
    $scope.submit = function(zoneid,product,discount,calltype,daytype) 
	{
     
    var postObject = new Object();
    postObject.product =product;
    postObject.discount =discount;
    postObject.calltype = calltype;
    postObject.zoneid=zoneid;
    postObject.daytype = daytype;
    postObject.endtime="";
    postObject.starttime="";
  
    console.log(product,discount,zoneid);
        
    if(product==undefined || discount==undefined || zoneid==undefined){
        alert("Data can't be entered! Enter valid inputs");
        return;
    }
        
    $http({
        url: 'http://172.25.26.183:6900/pps/yieldzone/'+postObject.zoneid+'/YzZoneDiscount',
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
        alert("Data successfully enterd for zone id "+postObject.zoneid);
    }).error(function(error){
        $scope.error = error;
        alert("Data can't be entered! enter valid inputs");
    });
        
    };
 $scope.getdata=function()
 {
 $http.get("http://172.25.26.183:6900/pps/yieldzone/YzZoneDiscount")
  .then(function(response) {
      $scope.abc = response.data;
	   
      });	 
 };
	
}]);

ppsConsole.controller('DialingRestrictionController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
 {
	  $scope.rows =[    
    ];
     
     $scope.r=[]
    $scope.lac;
    $scope.cellId;
    $scope.zoneid;
    $scope.numberRestrictionRegex;
                         
    $scope.addRow = function() 
	{
    $scope.rows.push({lac:'',cellId:'',zoneId:'',numberRestrictionRegex:''});
    };
    
    $scope.removeRow = function(lac)
	{   
      $http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/yieldzone/'+lac+'/yzDialingRestrictionsDiscount'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
    };
    
    
    $scope.submit = function(lac,cellId,zoneId,numberRestrictionRegex) 
	{ 
    var postObject = new Object();
    postObject.lac=lac;
    postObject.cellId =cellId;
    postObject.zoneId=zoneId;
    postObject.numberRestrictionRegex=numberRestrictionRegex;
  

    $http({
        url: 'http://172.25.26.183:6900/pps/yieldzone/'+postObject.lac+'/yzDialingRestrictionsDiscount',
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
    }).error(function(error){
        $scope.error = error;
    });
    };
$scope.getdata=function()
{
 $http.get("http://172.25.26.183:6900/pps/yieldzone/yzDialingRestrictionsDiscount")
  .then(function(response) {
      $scope.abc = response.data;
	   
      });	 
};
														 
													
 }]);
ppsConsole.controller('LacCellDateTimeController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
 {
	 $scope.rows =[    
    ];
     
     $scope.r=[]
    $scope.cellid;
    $scope.lac;
    $scope.product;
    $scope.discount;
    $scope.calltype;
    $scope.startdate;
    $scope.enddate;
    $scope.starttime;
    $scope.endtime;

                         
    $scope.addRow = function() 
	{
    $scope.rows.push({cellid:'',lac:'',product:'',discount:'',calltype:'',startdate:'',enddate:'',starttime:'',endtime:''});
    };
    
    $scope.removeRow = function(cellid)
	{   
      $http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/yieldzone/'+cellid+'/YzLacCellDateTimeDiscount'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
    };
   
    
    //MORETODO
    $scope.submit = function(cellid,lac,product,discount,calltype,startdate,enddate,starttime,endtime) 
	{   
    var postObject = new Object();
    postObject.cellid=cellid;
    postObject.lac=lac;
    postObject.product =product;
    postObject.discount =discount;
    postObject.calltype = calltype;
    postObject.endtime=endtime;
    postObject.enddate=enddate;
    postObject.starttime=starttime;   
    postObject.startdate=startdate;
  

    $http({
        url: 'http://172.25.26.183:6900/pps/yieldzone/'+postObject.cellid+'/YzLacCellDateTimeDiscount',
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
    }).error(function(error){
        $scope.error = error;
    });

    };
 $scope.getdata=function()
{
 $http.get("http://172.25.26.183:6900/pps/yieldzone/2000/YzLacCellDateTimeDiscount")
  .then(function(response) {
      $scope.x = response.data;
	   
      });	 
 };

													  									  
 }]);


ppsConsole.controller('YZSubscriberController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
{
	 	 $scope.rows =[    
    ];
     
    $scope.regEx1=/^[0-9]{1,}$/;
    $scope.regEx2=/^[a-zA-Z ]{1,}$/;
     $scope.r=[]
    $scope.subscriberId;
    $scope.maxcalls;
    $scope.maxCallsUnitOfTime;
    $scope.maxSMSs;
    $scope.maxSMSsUnitOfTime;
    $scope.recurringFee;
    $scope.recurringFeeUnitOfTime;
    $scope.validDialingCodeList;
    $scope.callCounter;
    $scope.smsCounter;

                         
    $scope.addRow = function() 
	{
    $scope.rows.push({subscriberId:'',maxcalls:'',maxCallsUnitOfTime:'',maxSMSs:'',maxSMSsUnitOfTime:'',recurringFee:'',recurringFeeUnitOfTime:'',validDialingCodeList:'',callCounter:'',smsCounter:''});
    };
    
    $scope.removeRow = function(subscriberId)
	{   
      $http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/yieldzone/'+subscriberId+'/yzSubscriber'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
    };
  
    $scope.submit = function(subscriberId,maxcalls,maxCallsUnitOfTime,maxSMSs,maxSMSsUnitOfTime,recurringFee,recurringFeeUnitOfTime,validDialingCodeList,callCounter,smsCounter) 
	{  
    var postObject = new Object();
    postObject.subscriberId =subscriberId;
    postObject.maxcalls=maxcalls;
    postObject.maxCallsUnitOfTime=maxCallsUnitOfTime;
    postObject.maxSMSs=maxSMSs;
    postObject.maxSMSsUnitOfTime=maxSMSsUnitOfTime;
    postObject.recurringFee=recurringFee;
    postObject.recurringFeeUnitOfTime=recurringFeeUnitOfTime;   
    postObject.validDialingCodeList=validDialingCodeList;
    postObject.callCounter=callCounter;
    postObject.smsCounter=smsCounter;
    
    console.log(subscriberId,maxcalls,maxCallsUnitOfTime,maxSMSs,maxSMSsUnitOfTime,recurringFee,recurringFeeUnitOfTime,validDialingCodeList,callCounter,smsCounter);
        
        if(subscriberId==undefined || maxcalls==undefined || maxCallsUnitOfTime==undefined || maxSMSs==undefined || maxSMSsUnitOfTime==undefined || recurringFee==undefined || recurringFeeUnitOfTime==undefined || validDialingCodeList==undefined || callCounter==undefined || smsCounter==undefined){
            alert("Data can't be entered! enter valid inputs");
            return;
        }

    $http({
        url: 'http://172.25.26.183:6900/pps/yieldzone/'+postObject.subscriberId+'/yzSubscriber',
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
        alert("Data entered successfully for subscriberID "+postObject.subscriberId);
    }).error(function(error){
        $scope.error = error;
        alert("Data can't be entered! Enter valid inputs");
    });
     
    };
						 $scope.getdata=function()
						 {
 $http.get("http://172.25.26.183:6900/pps/yieldzone/yzSubscriber")
  .then(function(response) {
      $scope.abc = response.data;
	   
      });	 };
												   
											  
}]);
//F&F CONTROLLER
ppsConsole.controller('FFController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
                      {
    
	$scope.msisdn=msisdnService.msisdn;
	$scope.directoryNumber;
                          
    //imp for validation                      
    $scope.regEx = "^[1-9]{1}[0-9]{9}$";                      
	$scope.rows =[
    ];
    $scope.addRow = function() 
	{
      $scope.rows.push({DirectoryNumber:''})
    }
	$scope.msg;
    if($scope.rows.length==0)
		{
			msg="no details";
		}
	$scope.remove= function(directoryNumber,index)
	{
      //$scope.abc.splice(index,1);  
		$http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/subscribers/'+$scope.msisdn+'/friendAndFamily/' +directoryNumber 

    }).then(function successCallback(response) {

      alert("Number is deleted Successfully");
     

    }, function errorCallback(response) {

      alert("Error. while deleting Number Try Again!");

    });
    };
    $scope.submit = function(directoryNumber) 
	{
        
		var postObject = new Object();
		 postObject.rec_id;
         postObject.msisdn = $scope.msisdn;
         postObject.directoryNumber=directoryNumber;
		 postObject.endDate;
        console.log(directoryNumber);
        //imp for validation
        if (directoryNumber==undefined) {
                    alert("Number can't be entered! Enter valid number");
                    return;
                }
        
    $http({
        url: 'http://172.25.26.183:6900/pps/subscribers/'+$scope.msisdn+'/friendAndFamily',//change it to dynamic date captures
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
    }).error(function(error){
        $scope.error = error;
    });
    };
                          
                
                      
        
$scope.getData=function()
{
	$http.get("http://172.25.26.183:6900/pps/subscribers/"+$scope.msisdn+"/friendAndFamily")
  .then(function(response) {
      $scope.abc = response.data;
      });
	
	
};
   
    
}]).directive('onFocus', function($timeout) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.onFocus, function (newValue) {
            if (newValue) {
                $timeout(function () {
                    //element.focus();
                }, 0, false);
            }
        }); 
      };    
});
ppsConsole.controller('callhuntingController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
	{
		$scope.msisdn=msisdnService.msisdn;
     $scope.rows =[
    ];
    
    $scope.regEx=/^[1-9]{1}[0-9]{9}$/; 
    $scope.addRow = function() 
	{
      $scope.rows.push({DirectoryNumber:''})
    }
    
    $scope.removeRow = function(number,index)
	{
		$http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/subscribers/'+$scope.msisdn+'/callHunting/' +number 

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });	
      
    }
    
    $scope.submit = function(number,check1,check2) 
	{
		var postObject = new Object();
        postObject.rec_id=number;
        postObject.msisdn = $scope.msisdn;
        postObject.directoryNumber=number;
		postObject.onBusy=check1;
		postObject.onNoAnswer=check2;
        
        if(number==undefined){
            alert("Data can't be entered! Enter valid inputs");
        }
    $http({
        url: 'http://172.25.26.183:6900/pps/subscribers/'+$scope.msisdn+'/callHunting',//change it to dynamic date captures
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
        alert("Directory Number "+postObject.directoryNumber+" entered successfully");
    }).error(function(error){
        $scope.error = error;
        alert("Number can't be entered! Enter valid 10 digit number");
    });
        
    };
$scope.getdata=function()
{
	$http.get("http://172.25.26.183:6900/pps/subscribers/"+$scope.msisdn+"/callHunting")
  .then(function(response) {
      $scope.abc = response.data;
      });	
};
												 
   
}]);

//LOGIN CONTROLLER 
ppsConsole.controller('LoginController',function($scope)
                     {
    $scope.verifyUser=function()
    {
         $scope.uname;
        $scope.pass;
        if(angular.equals($scope.uname,"ADMIN") && angular.equals($scope.pass,"ADMIN2"))
            window.location='#/admin';
        else
            alert("Wrong Credentials");
    }
});
ppsConsole.controller('HomeZoneController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
					 {
	$scope.msisdn=msisdnService.msisdn;
	 $scope.rows =[
    ];
    $scope.latitude;
	$scope.longitude;
	$scope.radius;
	$scope.ActivationCounter;
	$scope.status;
    $scope.addRow = function() 
	{
    $scope.rows.push({latitude:'',longitude:'',radius:'',ActivationCounter:'',status:''});
    };
    
    $scope.removeRow = function()
	{
		 $http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/subscribers/'+$scope.msisdn+'/HomeZone'

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });	
		
    };
	
    $scope.submit = function(latitude,longitude,radius,ActivationCounter,status) 
	{
		
	var postObject = new Object();
    postObject.msisdn = $scope.msisdn;
    postObject.activationStatus =status;
    postObject.hzLatitude=latitude; 
	postObject.hzLongitude=longitude;
	postObject.hzRadius=radius;
    postObject.firstActivationTimeStamp;
	postObject.lastActivationTimeStamp;	
    postObject.activationCounter=ActivationCounter;
    $http({
        url: 'http://172.25.26.183:6900/pps/subscribers/'+$scope.msisdn+'/HomeZone',//change it to dynamic date captures
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
    }).error(function(error){
        $scope.error = error;
    });
    };
$scope.getdata=function()
{ 
						 
 $http.get("http://172.25.26.183:6900/pps/subscribers/"+$scope.msisdn+"/HomeZone")
  .then(function(response) {
      $scope.x= response.data;
     
 });	
							
						 };
}]);

ppsConsole.controller('YieldZoneController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
					 {
	$scope.msisdn=msisdnService.msisdn;
	 $scope.rows =[
         
    ];

    $scope.discount_name;
	$scope.discount_priority;
                         
    $scope.addRow = function() 
	{
    $scope.rows.push({discount_name:'',discount_priority:''});
    };
    
    $scope.removeRow = function(index)
	{   
      $scope.rows.splice(index, 1);
    };
    
    $scope.remove= function(index){
      $scope.abc.splice(index,1);  
    };
    
    $scope.submit = function(discount_name,discount_priority) 
	{
        
    };
 $scope.getdata=function()
{
 $http.get("http://172.25.26.183:6900/pps/yieldzone/yzDiscountPriority")
  .then(function(response) {
      $scope.abc = response.data;
	   
      });	
};
}]);


//DND CONTROLLER
ppsConsole.controller('DNDController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
			  {
				  
				   $scope.rows =[
    ];
    
    
    $scope.addRow = function() 
	{
      $scope.rows.push({DirectoryNumber:''})
    }
    
    $scope.removeRow = function(index)
	{
		
      $scope.rows.splice(index, 1);
    }
    
    $scope.submit = function(number) 
	{
        var re = new RegExp("^([0-9]{10})$");
        if(re.test(number)){
            var row=[];
        row.push('DirectoryNumber: '+number);
        $scope.display=row;
            
        $http.post("http:jsonplaceholder.typicode.com/posts",row).then(
      function successCallback(response) {
        alert("Successfully entered data");
      },
      function errorCallback(response) {
        alert("Data can't be entered! enter valid input");
      });
        }else{
            alert("Enter valid phone number");
        }
		
    };
	
}]);
ppsConsole.controller('BlacklistController',['$scope','$http','msisdnService',function($scope,$http,msisdnService)
					 {
						 $scope.msisdn=msisdnService.msisdn;
	 $scope.rows =[
    ];
    
    $scope.regEx=/^[1-9]{1}[0-9]{9}$/;
    
    $scope.addRow = function() 
	{
      $scope.rows.push({DirectoryNumber:''})
    }
    
    $scope.removeRow = function(index,number)
	{
		
      $http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/subscribers/'+$scope.msisdn+'/pay4meBlack/' +number 

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });	
    }
    
    $scope.submit = function(number) 
	{
		 var postObject = new Object();
		 postObject.rec_id;
         postObject.msisdn = $scope.msisdn;
         postObject.directoryNumber=number;
		postObject.description="";
    $http({
        url: '  http://172.25.26.183:6900/pps/subscribers/'+$scope.msisdn+'/pay4meBlack',//change it to dynamic date captures
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
        alert("Directory number "+postObject.directoryNumber+" added!");
    }).error(function(error){
        $scope.error = error;
        alert("Number can't be added! Enter valid 10 digit number");
    });
       
    };
		$scope.getdata=function()
 {
 $http.get("http://172.25.26.183:6900/pps/subscribers/"+$scope.msisdn+"/pay4meBlack")
  .then(function(response) {
      $scope.abc = response.data;
	   
      });	
};
		
	
}]);
ppsConsole.controller('WhitelistController', ['$scope','$http','msisdnService',function($scope,$http,msisdnService)
{
	$scope.msisdn=msisdnService.msisdn;
	 $scope.rows =[
    ];
    
    $scope.regEx=/^[1-9]{1}[0-9]{9}$/;
    
    $scope.addRow = function() 
	{
      $scope.rows.push({DirectoryNumber:''})
    }
    
    $scope.removeRow = function(index,number)
	{
		 $http({

      method: 'DELETE',
      url: 'http://172.25.26.183:6900/pps/subscribers/'+$scope.msisdn+'/pay4meWhite/' +number 

    }).then(function successCallback(response) {

      alert("Data deleted Successfully");

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });	
    }
    
    $scope.submit = function(number) 
	{
		var postObject = new Object();
		 postObject.rec_id;
         postObject.msisdn = $scope.msisdn;
         postObject.directoryNumber=number;
		 postObject.description="";
    $http({
        url: 'http://172.25.26.183:6900/pps/subscribers/'+$scope.msisdn+'/pay4meWhite',//change it to dynamic date captures
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(response){
        $scope.response = response;
        alert("Directory number "+postObject.directoryNumber+" added");
    }).error(function(error){
        alert("Number can't be entered! Enter valid 10 digit number");
        $scope.error = error;
    });
       
    };
$scope.getdata=function()
 {
 $http.get("http://172.25.26.183:6900/pps/subscribers/"+$scope.msisdn+"/pay4meWhite")
  .then(function(response) {
      $scope.abc = response.data;
	   
      });	
};
													 
}]);


