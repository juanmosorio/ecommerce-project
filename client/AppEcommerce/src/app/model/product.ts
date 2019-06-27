export class Product {

  constructor(
    private productCode: string,
    private productName: string,
    private productLine: string,
    private productScale: string,
    private productVendor: string,
    private productDescription: string,  
    private quantityInStock: number,
    private buyPrice: number,  
    private MSRP: number) { }

}
