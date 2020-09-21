let Busesdata=[
  
]
function display(employ){
    storage=" ";
    
 employ.forEach(function(superhero,index){
     let jobsdata=`
     <tr>
     
     <td>${superhero.name}</td>
     <td>${superhero.source}</td>
     <td>${superhero.destination}</td>
     <td>${superhero.number}</td>
     <td>${superhero.passanger_capacity}
     </tr>`
     storage+=jobsdata
     
 })
 document.getElementsByClassName("tdata")[0].innerHTML =storage ;
}
display(Busesdata);

function addhere(event){
    event.preventDefault();
    let superhero ={}; 
    let name= document.getElementById('name').value;
    let source= document.getElementById('source').value;
    let destination= document.getElementById('destination').value;
    let number= document.getElementById('number').value;
     let passanger=document.getElementById('passanger').value;
    superhero.name =name;
    superhero.source =source;
    superhero.destination=destination;
    superhero.number=number;
     superhero.passanger_capacity=passanger;

    Busesdata.push(superhero);
    display(Busesdata)
    document.getElementById('name').value=""
    document.getElementById('source').value=""
    document.getElementById('destination').value=""
    document.getElementById('number').value=""
    document.getElementById('passanger').value=""
}
function searchByName() {
    let searchsource=document.getElementById("search").value
    let searchdest=document.getElementById('search').value
  
    let Name= Busesdata.filter(function(seekers){
         return (seekers.source.toUpperCase().indexOf(searchsource.toUpperCase())!= -1 )||(seekers.destination.indexOf(searchdest)!= -1)
     })
      //  console.log(Name);
      display(Name);
  };