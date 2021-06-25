'use strict';
{
  document.querySelector('button').addEventListener('click',()=>{
    const targetNode = document.getElementById('target');

    targetNode.textContent ='Changed！';
    targetNode.title ='This is Title';
    targetNode.style.color ='red';
    targetNode.style.backgroundColor ='skyblue';
  });
}

// {
//   function update(){
//     document.getElementById('target').textContent ='Changed！';
//   }
//   document.querySelector('button').addEventListener('click',update);
// }