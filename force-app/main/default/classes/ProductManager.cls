public with sharing class ProductManager {
    @AuraEnabled (cacheable=true)
    public static list<product2> FindAllProducts(){
    list<product2> productlist =[SELECT Id,Name,ProductCode,Description,Family FROM Product2 WHERE IsActive =TRUE];
        return productlist;
    }
   
}
