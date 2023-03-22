# diet_scale
java_3day
<h1>다이어트 체중계</h1>
<hr>
<p>당신의 건강몸무게를 알아보세요!</p>

<p>계산식 ) 적정체중 = (본인신장-100)*0.9</p>

<p>변수명 예) userHeight,userWeight, normal_w</p>

---
<p> 1. prompt 현재 키, 몸무게 입력받기 </p>

'let userHeight = window.prompt('당신의 키는?')'

'let userWeight = window.prompt('당신의 몸무게는?')'

'let normal_w = (userHeight-100)*0.9'

'let result = userWeight-normal_w'

---
<p>2. DOM객체 변수 생성하기.</p>

`const span_height = document.gerElementsByClassName('height')[0]`

`const span_weight = document.gerElementsByClassName('weight')[0]`

`const span_normal = document.gerElementsByClassName('normal')[0]`

`const span_weight2 = document.gerElementsByClassName('weight2')[0]`

---

검사
console.log(userheight, userweight, normal_w, result)
console.log(span_height, span_weight, span_normal, span_weight)

---

3. DOM 변수에 데이터변수 userheigh~result 출력
span_height.innerHTML = userheight
span_weight.innerHTML = userweight
span_normal.innerHTML = normal_w
span_weight2.innerHTML = result
