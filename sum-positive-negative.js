let numbers = [1,2,-2,5,-5,6,7];
numbers.reduce((a,e)=>{
  return {
    plus:  e > 0 ? a.plus  + e : a.plus,
    minus: e < 0 ? a.minus + e : a.minus
    }
},{plus: 0, minus:0}) //{ plus: 21, minus: -7 }
