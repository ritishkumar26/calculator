const btn =[['','','','del'],['(',')','C','%'],['7','8','9','X'],['4','5','6','-'],['1','2','3','+'],['0','.','/','=']];
let  content =` <table>`;
for(i=0;i<btn.length;i++)
  {
    content+=`<tr>`;
for(j=0;j<btn[0].length;j++)  
  {
   if(!(btn[i][j])=='')
   {
       content+= `<td><button> ${(btn[i][j])}</button></td>`;   
   }
}   
 content+=`</tr>`; 
 }
 content+=`</table>`;
 document.getElementById("keys-container").innerHTML=content;
 btns = (document.querySelectorAll('.keys-container button ,del'));

let screen =document.getElementById('screen');
let screenValue = '';
for (item of btns) {
item.addEventListener('click', (e) => {
buttonText = e.target.innerText;


if (buttonText == 'X') {
   buttonText = '*';
   screenValue += buttonText;
   screen.value = screenValue;
}

else if(buttonText=='del')
{
screenValue= screenValue.slice(0,-1);
screen.value =screenValue;

}
else if (buttonText == 'C') {
   screenValue = "";
   screen.value = screenValue;
   document.getElementById("dem").innerHTML ="";
}
else if (buttonText == '=') {

   document.getElementById("dem").innerHTML=screenValue;
   screen.value = eval(screenValue);
  screenValue =eval(screenValue);
}

else {
   screenValue += buttonText;
   screen.value = screenValue;
}
})

}