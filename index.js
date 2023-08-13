// create an object named custumer
const customer = {
    firstName:'Jake',
    lastName:'Smith',
    email:'jaekSmih!aol.com',
    phone:'',
    zipCode:'631',
    favoriteFlavors:32,
    cupSize:'medium',
    favoriteStore:'Target',
    firstVisit:false
};
// use bracket notation to fix email
customer['email'] = 'jak3smith1992email.com';
customer['phone'] = '3195551234';
customer['zipCode'] = '63132';
customer['favoriteFlavors'] = 'coffee strawberry and matcha';

delete customer.zipCode;
delete customer.favoriteStore;

customer.toppings = 'Chocolate sprinkles, wafer straws and gummy bears';
customer.futureFlavors = 'mango';
customer.todaysPurchaseCost = '5.32';
console.table(customer);




