function randomIntBetween(min, max) {
  // min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min); // 10.999999999999 => 10
}

console.log(randomIntBetween(1, 10));

//IN JAVASCRIPT EVERY NUMBER IS A FLOATING POINT UNLIKE OTHER PRIGRAMMING LANGUAGES
//NUMBERS ARE STORED AS 64 BIT FLOATING POINTS

Number.MAX_SAFE_INTEGER;//9 quadrillian //biggest possible number in JS
Math.pow(2,53)-1;//Number.MAX_SAFE_INTEGER
Math.pow(2,53)+1;//will not work as Math.pow(2,53)-1 is the max
Number.MIN_SAFE_INTEGER;//-9 quadrillian//minimum possible number in JS
Number.MIN_SAFE_INTEGER-10;//wont work properly.strange result due to binary operation happens
Number.MAX_VALUE;//1.797e+308//biggest value to work with

//-----------FLOAT POINT PRECISION------------------------
0.2+0.4;//0.60000000000001
0.2+0.4===0.6;//false  //JS internally works with binary system not decimal.so it will convvert to binary then do operation then backs to decimal then result
(1).toString();//"1"   //(1) >integer
(1).toString(2);//"1"
(5).toString(2);//"101"  //5 in binary is 101
(1/5).toString(2);//"0.00110011...1101"
0.2.toString(2);//"0.0011...1101"
0.2.toFixed(20);//"0.200000...1110"

(0.2+0.4).toFixed(2);//"0.60"

// say 20.2$ price
20.2.toFixed(20);"20.1999...28946"

// to get perfect precision
20.2*100;//2020




//-------BIGINT---------------
// for a number greaterthan
number.MAX_SAFE_INTEGER;//9007199254740991


9007199254740991n;//keep n at the end if number >9007199254740991
900719925474099186332132963986989839n;
-900719925474099186332132963986989839n;
// 900719925474099186332132963986989839.23434n;//invalid

10n-4n;//6n
10n-4;//error
ParseInt(10n)-4;//6
10n-BigInt(4);//6n
10n/2n;//5n
5n/2n;//2n not 2.5n 
5/2;//2.5

//-----------------------------------------------------------
Number.POSITIVE_INFINITY;//Infinity
Infinity;
-Infinity;
1/0;//Infinity
Number.isFinite(10);//true
Number.isFinite(Infinity);//false


Math.E;
Math.PI;
Math.sqrt;
Math.sin;
Math.pow(2,2);
Math.abs(-5);//5
Math.random();//0.84659  random value between 0&1

