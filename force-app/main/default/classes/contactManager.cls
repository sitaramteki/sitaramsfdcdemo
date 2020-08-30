public with sharing class contactManager {
   
  @AuraEnabled(cacheable=true)
  public static list<Contact> fetchAllContacts( string accountId){
      if(string.isNotBlank(accountId)){
      list<Contact> conlist = [SELECT Id,NAME,Phone,Email,Account.Name FROM Contact WHERE AccountId =:accountId];
      return conList;
      }
      else{
          return NULL;
      }
  }
  @AuraEnabled(cacheable=true)
  public static list<Account> getAllAccount(){
      return [SELECT Id,Name from ACCOUNT];    
  }
}
