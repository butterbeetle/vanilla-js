const calcultor = {
    add: function( a, b ){
        return a+b;
    },
    minus: function( a, b ){
        return a-b;
    },
    multiple: function( a, b ){
        return a*b;
    },
    divide: function( a, b ){
        return a/b;
    },
    pow: function( a, b ){
        return a**b;
    }
};

const plusResult = calcultor.add( 2, 3 );
const minusResult = calcultor.minus( plusResult, 10 );
const MutipleResult = calcultor.multiple( 10, minusResult );
const divideResult = calcultor.divide( MutipleResult, plusResult );
const powResult = calcultor.pow( divideResult, minusResult );