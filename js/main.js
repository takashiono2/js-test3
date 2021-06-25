'use strict';
{
  document.querySelector('button').addEventListener('click',()=>{
    const item2 = document.createElement('li')
    item2.textContent = 'item 2';
    // const ulNode = document.querySelector('ul')
    const ul = document.querySelector('ul')
    ul.appendChild(item2);
  });
}

// #9
// {
//   document.querySelector('button').addEventListener('click',()=>{
//     const targetNode = document.getElementById('target');
//     // targetNode.textContent = 'dotinstall';
//     targetNode.textContent = targetNode.dataset.translation;
//   });
// }

// {
//   document.querySelector('button').addEventListener('click',()=>{
//     const targetNode = document.getElementById('target');
//     targetNode.className = 'my-color my-border';
//     // targetNode.textContent ='Changed！';
//     // targetNode.title ='This is Title';
//     // targetNode.style.color ='red';
//     // targetNode.style.backgroundColor ='skyblue';
//   });
// }

// {
//   function update(){
//     document.getElementById('target').textContent ='Changed！';
//   }
//   document.querySelector('button').addEventListener('click',update);
// }