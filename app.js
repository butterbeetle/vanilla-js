function sayHello( name, age ){
    console.log( "My name is " + name + " and my age is " + age );
}

sayHello("A", 1);
sayHello("B", 2);
sayHello("C", 3);
sayHello("D", 4);

function plus( a, b ){
    console.log( a + " + " + b + " = " + ( a + b ) );
}
function divide( a, b ){
    console.log( a + " / " + b + " = " + ( a / b ) );
}
plus( 1, 3 );
divide( 3, 6 );

const player = {
    name: "me",
    sayHello: function( name ){
        console.log( "Hello " + name + " nice to meet you");
    }
}

console.log( player.name );
player.sayHello( "AAA" );
player.sayHello( "BBBB" );