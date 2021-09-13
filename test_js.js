/*
 * @Author: your name
 * @Date: 2021-09-11 15:57:43
 * @LastEditTime: 2021-09-11 16:20:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /week-share-demo/test_js.js
 */
function numHandle(str){
    let num = 0;
    for(let i = 0; i < str.length - 1; i++){
        for(let j = i + 1; j < str.length; j++){
            console.log('子串', str.slice(i,j + 1));
            parseInt(str.slice(i,j + 1)) % 22 === 0 ? ++num : ''
        }
    }
    console.log('num...', num);
    // return num;
}
numHandle('12221')