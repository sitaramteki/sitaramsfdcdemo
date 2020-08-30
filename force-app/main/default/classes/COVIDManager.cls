public with sharing class COVIDManager {
    @AuraEnabled
    public static list<COVID19CountrySummary> getCOVID19Summary(){
        list<COVID19CountrySummary> COVID19Summary = new list<COVID19CountrySummary>();
        string endPoint='https://api.covid19api.com/summary';
        Http h1=new Http();
        HttpRequest req1=new HttpRequest(); 
        req1.setHeader('Content-Type','application/json'); 
        req1.setMethod('GET');
        req1.setEndpoint(endPoint);
        HttpResponse hresp1=h1.send(req1);
    
        JSONParser parser = JSON.createParser(hresp1.getBody());
        system.debug('***hresp1.getBody()'+hresp1.getBody());
        /* while (parser.nextToken() != null)
		 {
             if (parser.getCurrentToken() == JSONToken.START_ARRAY) 
             {
                 while (parser.nextToken() != null) {
                      if (parser.getCurrentToken() == JSONToken.START_OBJECT) {
                          COVID19CountrySummary covid19 = (COVID19CountrySummary)parser.readValueAs(COVID19CountrySummary.class);
                          if(string.isNotBlank(covid19.Country)){
                          COVID19Summary.add(covid19);
                          }
                      }
                 }   
             }
         }*/
         
         Map<String, Object> Map2 =  (Map<String, Object>)JSON.deserializeUntyped(hresp1.getBody()); //re is response body string
         List<Object> lstObject = (List<Object>)Map2.get('Countries');
         system.debug('***List object*****'+lstObject);
		for(Object Countryobj :lstObject) 
        {
             Map<String,Object> ind = (Map<String,Object> )Countryobj;
           	 COVID19CountrySummary Countrylist = new COVID19CountrySummary();
             Countrylist.Country =(string) ind.get('Country');
             Countrylist.CountryCode =(string) ind.get('CountryCode');
             Countrylist.Slug = (string)ind.get('Slug');
             Countrylist.NewConfirmed =(Integer) ind.get('NewConfirmed');
             Countrylist.TotalConfirmed =(integer)ind.get('TotalConfirmed');
             Countrylist.NewDeaths = (integer)ind.get('NewDeaths');
             Countrylist.TotalDeaths = (integer)ind.get('TotalDeaths');
             Countrylist.NewRecovered =(integer)ind.get('NewRecovered');
             Countrylist.TotalRecovered = (integer)ind.get('TotalRecovered');
             Countrylist.CurrentDate =(string)ind.get('Date');
         	COVID19Summary.add(Countrylist);
        }
        system.debug('***COVID19Summary'+COVID19Summary);
        return COVID19Summary;
    }

    @AuraEnabled
    public static list<COVID19GlobalSummary> getCOVID19GlobalSummary(){
        list<COVID19GlobalSummary> globallist =new list<COVID19GlobalSummary>();
        COVID19GlobalSummary COVID19Global = new COVID19GlobalSummary();
        string endPoint2='https://api.covid19api.com/summary';
        Http h2=new Http();
        HttpRequest req2=new HttpRequest(); 
        req2.setHeader('Content-Type','application/json'); 
        req2.setMethod('GET');
        req2.setEndpoint(endPoint2);
        HttpResponse hresp2=h2.send(req2);
        system.debug('***hresp2.getBody()'+hresp2.getBody());
        Map<String,object> Map1 = (Map<String,object>)JSON.deserializeUntyped(hresp2.getBody());
        Map<String, Object> Global1 = (Map<String, Object>)Map1.get('Global');
        COVID19Global.NewConfirmed = (integer)Global1.get('NewConfirmed');
        COVID19Global.TotalConfirmed = (integer)Global1.get('TotalConfirmed');
        COVID19Global.NewDeaths = (integer)Global1.get('NewDeaths');
        COVID19Global.TotalDeaths = (integer)Global1.get('TotalDeaths');
        COVID19Global.NewRecovered = (integer)Global1.get('NewRecovered');
        COVID19Global.TotalRecovered = (integer)Global1.get('TotalRecovered');
        system.debug('***COVID19GlobalSummary'+COVID19Global);
        globallist.add(COVID19Global);
        system.debug('***list:   '+globallist);
        return globallist;
    }

    public class COVID19CountrySummary{  

    @AuraEnabled
    public string Country;
    @AuraEnabled
    public string CountryCode;
    @AuraEnabled
    public string Slug;
    @AuraEnabled
    public integer NewConfirmed;
    @AuraEnabled
    public integer TotalConfirmed;
    @AuraEnabled
    public integer NewDeaths;
    @AuraEnabled
    public integer TotalDeaths;
    @AuraEnabled
    public integer NewRecovered;
    @AuraEnabled
    public integer TotalRecovered;
    @AuraEnabled
    public string CurrentDate;
   
   }
   public class COVID19GlobalSummary{  

    @AuraEnabled
    public integer NewConfirmed;
    @AuraEnabled
    public integer TotalConfirmed;
    @AuraEnabled
    public integer NewDeaths;
    @AuraEnabled
    public integer TotalDeaths;
    @AuraEnabled
    public integer NewRecovered;
    @AuraEnabled
    public integer TotalRecovered;
   
   }
}
