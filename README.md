# calculator 만들기(3) 
## javascript
---

1️⃣ 버튼 입력 기능

```js
const numBtn = document.querySelectorAll(".num"); // 숫자 (모두 가져오기)
const calBtn = document.querySelectorAll(".cal"); // 연산자 (모두 가져오기)

const btnClick = () => {
    for (let i = 0; i < numBtn.length; i++) {
        numBtn[i].addEventListener("click", function (e) {
            // console.log(e.target);
            current.value += e.target.value;     // 누적으로 입력값을 넣기 위해 += 로 넣어준다
        });
    }

    for (let i = 0; i < calBtn.length; i++) {
        calBtn[i].addEventListener("click", function (e) {
            // console.log(e.target);
            current.value += e.target.value;
        });
    }
};
btnClick();
```
