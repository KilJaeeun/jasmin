/*
동적 계획법 : DP


수식 or 점화식 발견 => 규칙찾기
작은거에서 규칙을 찾고, 계산을 최소화시킨다.


*/

function solution(triangle) {
    let matrix = [triangle[0][0]]; //[7]
    triangle.splice(0, 1); // splice(index, num, value)
    // triangle:
    triangle.forEach((element) => {
        const newMatrix = [0];

        matrix.forEach((item, index) => {
            newMatrix.splice(index, 1, item + list[index]);
            newMatrix.splice(index + 1, 0, item + list[index + 1]);
        });
        matrix = newMatrix;
    });

    return 0;
}

const triangle = [
    [7],
    [3, 8],
    [8, 1, 0],
    [2, 7, 4, 4],
    [4, 5, 2, 6, 5]
];