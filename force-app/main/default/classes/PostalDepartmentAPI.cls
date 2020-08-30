public with sharing class PostalDepartmentAPI {
    
    @AuraEnabled
    public static list<PostalResponseWrapper> postOfficeByPincode(string pincode){

        list<PostalResponseWrapper> postalList = new list<PostalResponseWrapper>();
        string endpoint = 'https://api.postalpincode.in/pincode/'; //list out endpoint

        if(string.isNotBlank(pincode)){
            endpoint = endpoint+ pincode; //https://api.postalpincode.in/pincode/754205 
        }

        Http h = new Http(); //instantiate http
        HttpRequest hreq = new HttpRequest();  //create Request for your http api call
        hreq.setMethod('GET');
        hreq.setEndpoint(endpoint);
        hreq.setHeader('content-type','application/json');
        HttpResponse hresp = h.send(hreq); //invoke rest call  with send()

        system.debug('****hresp'+hresp.getStatusCode());
        //if response sucess then only parase
        if(hresp.getStatusCode() ==200){
            JSONParser parser = JSON.createParser(hresp.getBody()); 
            parser.nextToken();
            while(parser.nextToken()!=NULL){
                if(parser.getcurrentToken() == JSONTOKEN.START_ARRAY){
                    while(parser.nextToken()!=NULL){
                        if(parser.getcurrentToken() == JSONTOKEN.START_OBJECT) {
                            PostalResponseWrapper eachPostal = (PostalResponseWrapper)parser.readValueAs(PostalResponseWrapper.class);
                            eachPostal.PINCode = pincode;
                            postalList.add(eachPostal);
                            system.debug('eachPostal'+eachPostal); 
                        }   
                    }
                }   
            }
        }
        system.debug('postalList'+postalList);
        return postalList;
    }

    @AuraEnabled
    public static list<PostalResponseWrapper> postOfficeByBranchName(string branchName){
        list<PostalResponseWrapper> postalList = new list<PostalResponseWrapper>();
        string endpoint = 'https://api.postalpincode.in/postoffice/'; //list out endpoint
        if(string.isNotBlank(branchName)){
            endpoint = endpoint+ branchName; //https://api.postalpincode.in/postoffice/Gachibowli 
        }
        Http h = new Http();  //instantiate http
        HttpRequest hreq = new HttpRequest(); //create Request for your http api call
        hreq.setMethod('GET');
        hreq.setEndpoint(endpoint);
        hreq.setHeader('content-type','application/json');
        
        HttpResponse hresp = h.send(hreq); //invoke rest call  with send()
        system.debug('****hresp'+hresp.getStatusCode());
        //if response sucess then only parase
        if(hresp.getStatusCode() ==200){
            JSONParser parser = JSON.createParser(hresp.getBody()); 
            parser.nextToken();
            while(parser.nextToken()!=NULL){
                if(parser.getcurrentToken() == JSONTOKEN.START_ARRAY){
                    while(parser.nextToken()!=NULL){
                        if(parser.getcurrentToken() == JSONTOKEN.START_OBJECT) {
                            PostalResponseWrapper eachPostal = (PostalResponseWrapper)parser.readValueAs(PostalResponseWrapper.class);                           
                            postalList.add(eachPostal);                           
                            system.debug('eachPostal'+eachPostal); 
                        }   
                    }
                }   
            }
        }
        system.debug('postalList'+postalList);
        return postalList;
    }

    public class PostalResponseWrapper{
        @AuraEnabled
        public string Name;
        @AuraEnabled
        public string Description;
        @AuraEnabled
        public string PINCode;
        @AuraEnabled
        public string BranchType;
        @AuraEnabled
        public string DeliveryStatus;
        @AuraEnabled
        public string Circle;
        @AuraEnabled
        public string District;
        @AuraEnabled
        public string Division;
        @AuraEnabled
        public string Region;
        @AuraEnabled
        public string State;
        @AuraEnabled
        public string Country;
    }
}