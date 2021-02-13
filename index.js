"use strict";

const numBtn = document.querySelectorAll(".num"); // 숫자 (모두 가져오기)
const calBtn = document.querySelectorAll(".cal"); // 연산자 (모두 가져오기)

const previous = document.querySelector(".previous");
const current = document.querySelector(".current");

// 버튼 입력 기능
const btnClick = () => {
    for (let i = 0; i < numBtn.length; i++) {
        numBtn[i].addEventListener("click", function (e) {
            // console.log(e.target);
            current.value += e.target.value;
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

// 연산 기능
const resultBtn = document.querySelector(".result");
resultBtn.addEventListener("click", (e) => {
    // console.log(e.target);
    previous.value = current.value;
    current.value = eval(current.value);
});

// 초기화 기능
const reset = document.querySelector(".clear");
reset.addEventListener("click", (e) => {
    // console.log(e.target);
    current.value = "";
    previous.value = "";
});

// 삭제 기능
const del = document.querySelector(".del");
del.addEventListener("click", (e) => {
    // console.log(e.target);
    current.value = current.value.slice(btnClick.length, -2); // 음수 인덱스는배열 끝에서부터의 자를 갯수 길이를 나타낸다(뒤에서 1개씩 삭제)
});
