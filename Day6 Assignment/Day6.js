let Employees=[
      {
          name:"Rohit",
          age:19,
          city:"mira-bhyandar",
          salary:40000,
       },
       {
           name:"sahil",
           age:19,
           city:"malad",
           salary:45000,
       },
       {
           name:"kunal",
           age:20,
           city:"Andheri",
           salary:46000,
       },
]

function display(employ){
       storage=" ";
       srno=1;
    employ.forEach(function(superhero,index){
        let jobsdata=`
        <tr>
        <td>${srno}</td>
        <td>${superhero.name}</td>
        <td>${superhero.age}</td>
        <td>${superhero.city}</td>
        <td>${superhero.salary}</td>
        <td><button onclick="Delete(${index})">Delete</button>
        </tr>`
        storage+=jobsdata
        srno++;
    })
    document.getElementsByClassName("tdata")[0].innerHTML =storage ;
}
display(Employees);

function searchByName() {
  let searchValue=document.getElementById("search").value
  
  let Name= Employees.filter(function(seekers){
       return (seekers.name.toUpperCase().indexOf(searchValue.toUpperCase())!= -1 )||(seekers.city.toUpperCase().indexOf(searchValue.toUpperCase())!= -1);
   })
    //  console.log(Name);
    display(Name);
};
function Delete(index){
    Employees.splice(index,1);
    display(Employees)

}