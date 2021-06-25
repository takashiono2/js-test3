'use strict';
{
  document.querySelector('button').addEventListener('click',()=>{
    const targetNode = document.getElementById('target');
    // targetNode.classList.add('my-color');
    // if(targetNode.classList.contains('my-color')===true){
    //   targetNode.classList.remove('my-color');
    // }else{
    //   targetNode.classList.add('my-color');
    // }
    targetNode.classList.toggle('my-color');
  });
}

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