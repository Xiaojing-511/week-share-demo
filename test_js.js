/*
 * @Author: your name
 * @Date: 2021-09-11 15:57:43
 * @LastEditTime: 2021-09-22 20:57:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /week-share-demo/test_js.js
 */
function test(times,arr){
    let flag = 'row',row = arr[0].length,col = arr.length;
    while(times > 0){
        if(flag === 'row'){
            for(var i = 0;i < row/2; i++){
                for(var j = 0;j < col; j++){
                    arr[j][i] += arr[j][row - 1 - i]
                }
            }
            row = row/2
            flag = 'col'
            console.log('row', arr);
        }else if(flag === 'col'){
            for(var i = 0;i < col/2; i++){
                for(var j = 0;j < row; j++){
                    arr[i][j] += arr[col - 1 - i][j]
                }
            }
            col = col/2
            flag = 'row'
            console.log('col', arr);
        }
        times--;
    }
    return arr[0][0]
}
console.log('test', test(2,[[1,2],[3,4]]));
console.log('1 2'.split(' ').map(item => {return parseInt(item)}));