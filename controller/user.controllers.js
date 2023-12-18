var Stock ={ 
    constructor(firstItem,amount,owner){
    this.firstItem = firstItem;
    this.amount=amount;
    this.owner = owner;
} ,

add ({firstItem,amount,owner}){
    this.firstItem = firstItem;
    this.amount = amount;
    this.owner = owner;
    return{
       firstItem: this.firstItem,
       amount: this.amount,
       owner: this.owner 
        
    }

},
     
};
const Stock = new Stock('adfgh','adfgh','asdfgh')
