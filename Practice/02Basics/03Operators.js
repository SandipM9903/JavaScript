// var num1 = 7;
// var num2 = 10;
// console.log(num1 + num2);

// var answer = num1 > num2;
// console.log(answer);

// Discount = (ListPrice - SellingPrice)/ListPrice * 100

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice-sellingPrice) / listingPrice) * 100;
console.log("Discounted percentage is : " + discountPercent);

displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage);

var result = listingPrice > sellingPrice;
console.log(typeof result);