public with sharing class caseManager {
   @AuraEnabled
   public static list<case> fetchCaseDetails(string caseNumber){
       if(string.isNotBlank(caseNumber)){
           string searchCase ='%'+caseNumber+'%';
    list<case> listofcase =[SELECT Id,Account.Name,CaseNumber,IsClosed,Origin,Description,Priority,Subject,Status 
    FROM CASE where caseNumber like :searchCase];
    return  listofcase;
       }
       else{
           return NULL;
       }
   }
   @AuraEnabled
   public static string closeCase(string caseId){
        string message;
    try{
         case cs =new case(Id = caseId);
         cs.status ='Closed';
         update cs;
         message = (string)cs.CaseNumber;
        
    }
    catch(Exception ex){
        message =ex.getMessage();
        
    }
    return message;
       
   }
   @AuraEnabled
   public static list<case> getCase(string caseId){
    if(string.isNotBlank(caseId)){
        list<case> c1 =[SELECT Id,Account.Name,CaseNumber,IsClosed,Origin,Description,Priority,Subject,Status 
        FROM case where Id =: caseId];
    return  c1;
    }
    else{
        return NULL;
    }
       
   }
   @AuraEnabled
   public static list<case> getCaseopen(string caseId){
    if(string.isNotBlank(caseId)){
        list<case> c1 =[SELECT Id,Account.Name,CaseNumber,IsClosed,Origin,Description,Priority,Subject,Status 
        FROM case where Status !='Closed' and Id =: caseId ];
    return  c1;
    }
    else{
        return NULL;
    }
       
   }
   @AuraEnabled
   public static list<case> fetchOpenCaseDetails(string caseNumber){
       if(string.isNotBlank(caseNumber)){
           string searchCase ='%'+caseNumber+'%';
    list<case> listofcase =[SELECT Id,Account.Name,CaseNumber,IsClosed,Origin,Description,Priority,Subject,Status 
    FROM CASE where Status !='Closed' and caseNumber like :searchCase];
    return  listofcase;
       }
       else{
           return NULL;
       }
   }
}
