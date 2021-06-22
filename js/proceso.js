
const logoW = document.getElementById('logoW');
const logoB = document.getElementById('logoB');
const body = document.getElementById('body');
const chk = document.getElementById('chk');
const numCal=document.getElementById("num_cal");
let imagenes=document.getElementsByClassName("items");
let option = document.querySelectorAll(".items");
let counter =0;

chk.addEventListener('change',() => {
  dark_theme();
  logoB_logoW();
});

function dark_theme()
{
  body.classList.toggle('dark');
}

function logoB_logoW()
{
  if (logoW.classList.contains('hide')){         
           logoB.classList.remove('show');
           logoB.classList.add('hide');
           logoW.classList.remove('hide');
    }
  else {
          logoB.classList.add('show');
          logoB.classList.remove('hide');
          logoW.classList.remove('show');
          logoW.classList.add('hide');
    }
}



for(var i = 0; i < imagenes.length; i++){
  imagenes[i].addEventListener('click',function()
  {
    this.classList.toggle('selection_background');
  });
}

for(i=0; i < option.length; i++)
{
    imagenes[i].setAttribute("onclick", "optionSelected(this)");

}



function optionSelected(a)
{
if (datos[parseFloat(a.textContent)].active =="false")
{
  datos[parseFloat(a.textContent)].active = "true";
  counter = parseFloat(datos[parseFloat(a.textContent)].cal)+counter;
}
else
{
  datos[parseFloat(parseFloat(a.textContent))].active = "false";
  counter =counter-parseFloat(datos[parseFloat(a.textContent)].cal);
}



if (counter < 0)
{
counter = 0;  
}
numCal.innerText = counter;

}
