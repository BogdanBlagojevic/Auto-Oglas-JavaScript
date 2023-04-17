let automobili=[
    {Marka:'Audi',Cena:'30000',Model:'А6',Godiste:'2017'},
    {Marka:'Bmw', Cena:'40000',Model:'520d',Godiste:'2018'},
    {Marka:'Audi',Cena:'50000',Model:'А8',Godiste:'2020'}
]

let poruka=((vreme)=>{
    var today = new Date();
      vreme= today.getHours() 
    if(vreme>=1 && vreme<=12){
      alert('Dobro jutro')
    }
    if(vreme>=13 && vreme<20){
      alert('Dobar dan')
    }
    else{
      alert('Dobro vece')
    }
    })()

let obrisi=()=>{
    document.querySelector('.cards-container').innerHTML="";
}

let ispisi=(auto)=>{
    document.querySelector('.cards-container').innerHTML+="<div class='card'>"+"<P class='main-text'>"+"Marka:"+auto.Marka+"</P>"+
    "<P class='main-text'>"+"Cena:"+"<span>"+auto.Cena+"</span>"+"</P>"+
    "<P class='main-text'>"+"Model:"+auto.Model+"</P>"+
    "<P class='main-text'>"+"Godiste:"+auto.Godiste+"</P>"+
    "<P id='polje'>"+""+"</P>"+
    " <button onclick='Rata(this)' class='rata'>"+ "Rata" +"</button>"+
   "</div>"
   }

 let prikazi=(()=>{
      let dumgePrikazi=document.querySelector('#ispisi')
      dumgePrikazi.addEventListener('click',()=>{
       automobili.forEach(obrisi)
       automobili.forEach(ispisi)
      })
    })()
   
let klik= (()=>{
    let kartica=document.querySelector('.card')
    kartica.style.display="none";
    let dugme=document.querySelector('#dugme')
    dugme.addEventListener('click',()=>{
        let modal= document.querySelector('.modal')
        modal.style.display="block";
    })
    let zatvori=document.querySelector('.close')
   zatvori.addEventListener('click',()=>{
        let modal= document.querySelector('.modal')
        modal.style.display="none";
    })
    let dodaj= document.querySelector('#dodaj')
    dodaj.addEventListener('click',()=>{
        let input1= document.querySelector('#marka').value;
        let input2= document.querySelector('#cena').value;
        let input3= document.querySelector('#model').value;
        let input4= document.querySelector('#godiste').value;
        if(input1.length <3){
           let error1=document.querySelector('#error1')
           error1.innerHTML="Molimo vas unesite vise od 3 karaktera"
        }
        else if(input2.length<3){
            let error2=document.querySelector('#error2')
            error2.innerHTML="Molimo vas unesite vise od 3 karaktera "
        }
        else if(input3.length<3){
            let error3=document.querySelector('#error3')
            error3.innerHTML="Molimo vas unesite vise od 3 karaktera "
        }
        else if(input4.length<3){
            let error4=document.querySelector('#error4')
            error4.innerHTML="Molimo vas unesite vise od 3 karaktera "
        }
        else{
            error1.innerHTML="";
            error2.innerHTML="";
            error3.innerHTML="";
            error4.innerHTML="";
       let obj= {Marka:input1, Cena:input2, Model:input3, Godiste:input4}
       automobili.push(obj)
        document.querySelector('.cards-container').innerHTML+="<div class='card'>"+"<P class='main-text'>"+"Marka:"+obj.Marka+"</P>"+
       "<P class='main-text'>"+"Cena:"+"<span>"+obj.Cena+"</span"+"</P>"+
       "<P class='main-text'>"+"Model:"+obj.Model+"</P>"+
       "<P class='main-text'>"+"Godiste:"+obj.Godiste+"</P>"+
       "<P id='polje'>"+""+"</P>"+
       " <button onclick='Rata(this)' class='rata'>"+ "Rata" +"</button>"+
       "</div>"
        let modal= document.querySelector('.modal')
        modal.style.display="none";
        document.querySelector('#promena').innerHTML="Automobili:";
        } 
    })
})();

let pretraga=(()=>{
    let src= document.querySelector("#pretrazi")
    src.addEventListener('click',()=>{
      let pret=document.querySelector('#pretraga').value;
      let filter= automobili.filter(element => element.Marka === pret)
      filter.forEach(obrisi)
      filter.forEach(ispisi)
    })
})();

function Rata(element){
    let mainEl= element.closest('.card');
    let price= mainEl.querySelector('p span').innerText
    price=parseFloat(price);
    let polje=mainEl.querySelector('#polje')
    polje.innerHTML=(rata(cena(price,18))) 
}
let cena =(cena,procenat)=>{
    cena=  cena+(cena*procenat/100)
    return cena
    }
    function rata(cena){
    let zbir=0;
    zbir='Kada bi uzimali na rate cena automobila je '+cena+' $ sto je'+' '+parseFloat(cena/12).toFixed(2)+' $ '+'na 12 rata';
    return zbir
    }
    
function Prebroj(number) {
    document.querySelector('#broj').innerHTML="Broj Oglasa:"+(number+1);
    document.querySelector('#promena').innerHTML+=automobili[number].Marka+" "+automobili[number].Model+" / ";
    let newNumber = number + 1;
    if (newNumber < automobili.length) {
        Prebroj(newNumber); 
    }
  }