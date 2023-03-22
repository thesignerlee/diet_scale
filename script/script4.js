//계산식) 적정체중 = (본인신장-100)*0.9
//변수명 예) userHeight, userWeight, normal_w
//prompt 현재키, 몸무게 입력받기
//DOM객체 변수 생성하기
//1. prompt 현재 키, 몸무게 입력받기
/* let userheight = window.prompt('현재 키를 입력하세요')
let userweight = window.prompt('현재 몸무게를 입력하세요')
let normal_w = (userheight-100)*0.9
let result = userweight-normal_w */
//2. DOM객체 변수 생성하기
/* const span_height = document.getElementsByClassName('height')[0]
const span_weight = document.getElementsByClassName('weight')[0]
const span_normal = document.getElementsByClassName('normal')[0]
const span_weight2 = document.getElementsByClassName('weight2')[0] */
//검사
/* console.log(userheight, userweight, normal_w, result)
console.log(span_height, span_weight, span_normal, span_weight) */
//3. DOM 변수에 데이터변수 userheigh~result 출력
/* span_height.innerHTML = userheight
span_weight.innerHTML = userweight
span_normal.innerHTML = normal_w
span_weight2.innerHTML = result */



let userheight = window.prompt('현재 키를 입력하세요')
console.log('당신의 현재 키는 '+userheight+' 입니다')
let userweight = window.prompt('현재 몸무게를 입력하세요')
console.log('당신의 현재 몸무게는 '+userweight+' 입니다')
let normal = (userheight-100)*0.9
console.log(`당신의 목표 몸무게는 ${(userheight-100)*0.9}입니다`)
let result = userweight-normal
console.log(`당신의 최종 감량 목표는 ${userweight-normal}입니다`)
const hei = document.getElementsByClassName('height')
const wei = document.getElementsByClassName('weight')
const nor = document.getElementsByClassName('normal')
const nor_w = document.getElementsByClassName('weight2')

hei[0].innerHTML = userheight
wei[0].innerHTML = userweight
nor[0].innerHTML = normal
nor_w[0].innerHTML = result


/* const height = document.getElementsByClassName('height')
const weight = document.getElementsByClassName('weight')
const normal = document.getElementsByClassName('normal')
const weight2 = document.getElementsByClassName('weight2')
let userheight = window.prompt('현재 키를 입력하세요')
let userweight = window.prompt('현재 몸무게를 입력하세요')
console.log('당신의 현재 키는 '+userheight+' 입니다')
console.log('당신의 현재 몸무게는 '+userweight+' 입니다')
normal_w = (userheight-100)*0.9
console.log(`당신의 목표 몸무게는 ${(userheight-100)*0.9}입니다`)
console.log(`당신의 최종 감량 목표는 ${userweight-normal_w}입니다`)

height[0].innerHTML = userheight
weight[0].innerHTML = userweight
normal[0].innerHTML = normal_w
weight2[0].innerHTML = userweight-normal_w */