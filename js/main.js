'use strict';

// #13
{
  document.querySelector('button').addEventListener('click',()=>{
    const li = document.createElement('li');
    const ul = document.querySelector('ul');
    const text = document.querySelector('input');
    li.textContent = text.value;
    ul.appendChild(li);
    
    text.value ='';
    text.focus();
  });
}

// 
// #21
// document.querySelector('ul').addEventListener('click',e =>{
//   if(e.target.nodeName === 'LI'){
//     e.target.classList.toggle('done');
//   }
// });

// #20
// {
//   document.querySelector('form').addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log('submit!')
//   });

// }
// #19
// {
//  const text = document.querySelector('textarea');
// //  text.addEventListener('focus',()=>{
// //    console.log('focus!');
// //  });
// //  text.addEventListener('blur',()=>{
// //   console.log('blur');
// // });
//  text.addEventListener('input',()=>{
//    console.log(text.value.length);
//  });
//  text.addEventListener('change',()=>{
//   console.log('change');
// });

// }

// #18
// {
//   document.querySelector('button').addEventListener('dblclick',()=>{
//     console.log('Double Cliked！');
//   });
//   document.addEventListener('keydown',e=>{
//     // console.log('moved!');
//     console.log(e.key);
//   });
// }

// #17
// {
//   document.querySelector('button').addEventListener('dblclick',()=>{
//     console.log('Double Cliked！');
//   });
//   document.addEventListener('mousemove',()=>{
//     console.log('moved!');
//   });
// }

// #16
// {
//   document.querySelector('button').addEventListener('click',()=>{
//     const colors = document.querySelectorAll('input');
//     const selectedColors = [];
//     colors.forEach(color => {
//       if (color.checked === true) {
//         selectedColors.push(color.value);
//       }
//     });
//       const li = document.createElement('li');
//       // li.textContent = selectedColors.join(',');
//       li.textContent = selectedColors;
//       document.querySelector('ul').appendChild(li);
//     });
// }

// #15
// {
//   document.querySelector('button').addEventListener('click',()=>{
//     const colors = document.querySelectorAll('input');
//     let selectColor;
//     colors.forEach(color =>{
//       if(color.checked === true){
//         selectColor = color.value;
//       }
//     });
//     const li = document.createElement('li');
//     li.textContent = selectColor
//     document.querySelector('ul').appendChild(li);
//   });
// }

// #14
// {
//   document.querySelector('button').addEventListener('click',()=>{
//     const li = document.createElement('li');
//     const color = document.querySelector('select');
//     li.textContent = `${color.value}-${color.selectedIndex}`;
//     document.querySelector('ul').appendChild(li);
//   });
// }

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
//    // #8
//    document.querySelector('button').addEventListener('click',()=>{
//       const targetNode = document.querySelector('#target');
//       targetNode.classList.toggle("my-color");
//       //  if (targetNode.classList.contains("my-color")===true){
//       //   targetNode.classList.remove("my-color");
//       //  }else{
//       //   targetNode.classList.add("my-color");
//       //  }
//    });
// }

// {
//   // #7
//   document.querySelector('button').addEventListener('click',()=>{
//     const targetNode = document.querySelector('#target');
//     targetNode.className = "my-color my-border";
//   });
// }

// #6
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

// #5
// {
//   document.querySelector('button').addEventListener('click',()=>{
//     document.querySelector('#target').textContent = 'DotInstall';
//   });
// }

// #4
// {
//   function update(){
//     document.getElementById('target').textContent ='Changed！';
//   }
//   document.querySelector('button').addEventListener('click',update);
// }

// #2
// {
//   function update(){
//     document.getElementById('target').textContent = 'DotInstall';
//   }
  
// setTimeout(update,1000);
// }