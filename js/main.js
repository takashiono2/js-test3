'use strict';

{
  document.querySelector('button').addEventListener('click',()=>{
    const li = document.createElement('li');
    const color = document.querySelector('select');
    li.textContent = `${color.value}-${color.selectedIndex}`;
    document.querySelector('ul').appendChild(li);
  });
}

// #13
// {
//   document.querySelector('button').addEventListener('click',()=>{
//     const li = document.createElement('li');
//     const text = document.querySelector('input');
//     li.textContent = text.value;
//     document.querySelector('ul').appendChild(li);
//     text.value = '';
//     text.focus();
//   });
// }

// #12
// {
//   document.querySelector('button').addEventListener('click',()=>{
//     const item1 = document.querySelectorAll('li')[1];
//     // item1.remove();
//     document.querySelector('ul').removeChild(item1);
//   });
// }

// #11
// {
//   document.querySelector('button').addEventListener('click',()=>{
//     const item0 = document.querySelectorAll('li')[0];
//     const copy = item0.cloneNode(true);

//     const ul = document.querySelector('ul');
//     const item2 = document.querySelectorAll('li')[2];
//     ul.insertBefore(copy, item2);
//   });
// }

// #10
// {
//   document.querySelector('button').addEventListener('click',()=>{
//     const item2 = document.createElement('li')
//     item2.textContent = 'item 2';
//     // const ulNode = document.querySelector('ul')
//     const ul = document.querySelector('ul')
//     ul.appendChild(item2);
//   });
// }

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