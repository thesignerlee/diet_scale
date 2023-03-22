let num1=10;
let num2=20;
let result;
num1--; //9
console.log(num1); //9
num1++; //10
console.log(num1);
result=num2++; //num2 21
console.log(result); // 20
result=++num2; //num2 22 //rusult= rusult + ++ num2 =42
console.log(result); //22
result += ++num2
console.log(result);
console.log('------------------')
let age = window.prompt('당신의 나이는?')
console.log('올해 당신의 나이는 '+age+' 살입니다.') //나이는 뒤에 ? 쓴다고 해서 나이가 적히지 않음
//++age
console.log('내년 당신의 나이는 '+(++age)+' 살입니다.') //괄호를 쳐서 우선순위로 넣기
// 템플릿 문자열
console.log(`내년 당신의 나이는 ${++age}살입니다`) //밴팃기호로 쓰는 것 물결모양에 있는 것 ECMA의 새로운 구조 $쓰는 이유, 복합 대입이나 연산자 속성 메서드를 안에서 불러들이기 위한 명령이기 때문, 이것을 붙이지 않으면 나머지는 다 문자데이터로 인식
// 구구단
let dan99 = window.prompt('구구단 몇단이 궁금해요?')
// 2X1=2 고정되는 값은 X1= 반복되는 부분은 앞뒤
console.log(`${dan99}X1=${dan99*1}`)
console.log(`${dan99}X2=${dan99*2}`)
console.log(`${dan99}X3=${dan99*3}`)
console.log(`${dan99}X4=${dan99*4}`)
console.log(`${dan99}X5=${dan99*5}`)
console.log(`${dan99}X6=${dan99*6}`)
console.log(`${dan99}X7=${dan99*7}`)
console.log(`${dan99}X8=${dan99*8}`)
console.log(`${dan99}X9=${dan99*9}`)