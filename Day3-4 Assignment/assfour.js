function button1() {
    const img1=document.getElementById('img');
    const sv="https://image.cnbcfm.com/api/v1/image/104819285-thor.jpg?v=1529476684";
    img1.src=sv

}

function button2() {
    const img2=document.getElementById('img');
     const sk="https://i.pinimg.com/originals/2a/02/68/2a026809d5a02d6526f086c05e3d56fd.jpg";
     img2.src=sk
}
function button3() {
    const img3=document.getElementById('img');
     const sg="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/08/03/488179-doraemon.jpg";
     img3.src=sg
}
     
    
function getvalue(){
    const eles= document.getElementsByClassName('name')  
let sv= (eles[0].value);
    const vs= document.getElementsByClassName('name2')
     vs[0].value=sv
}

let srk=[
    {
        name:"sahil gupta",
        age:19,
        country:"india",
        hobbies:["coding","watching series","running"]
},
{
    name:"rohit chaurasiya",
    age:20,
    country:"india",
    hobbies:["xyz","watching series","cricket"]
},
{
    name:"kunal jangid",
    age:19,
    country:"india",
    hobbies:["coding","techknwgd","bad-mitnton"]
},
{
    name:"kamaran shaikh",
    age:31,
    country:"india",
    hobbies:["carrom","watching series","cricket"]
},

]
//Question no.3
// using for loop
// for(let i=0; i<=srk.length; i++){
//     console.log(srk[i]);
// }

//  Qestion no.4
for(let v=0; v<=srk.length; v++)
{
    if(srk[v].age<=30)
    {
    console.log(srk[v])
    }
}