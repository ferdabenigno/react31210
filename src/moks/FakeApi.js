
const products = [
    {id:'01', name:'iphone x', precio: '60000', img:'/images/iphone-x.jpeg', stock:5},
    {id:'02', name:'iphone xr', precio: '80000', img:'/images/ihone-xr.jpeg', stock:15},
    {id:'03', name:'iphone 11', precio: '120000', img:'/images/iphone-11.jpg', stock:7},
    {id:'04', name:'iphone 12', precio: '150000', img:'/images/iphone-12.jpg', stock:3} 
  ]

  export const getData = new Promise ((resolve, reject) =>{
   
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(products)
      }else{
        reject('salio mal :(')
      }
    },3000)
  });

  