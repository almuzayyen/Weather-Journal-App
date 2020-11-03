


/* Global Variables */
const feelings = document.getElementById('feelings-id');
const content = document.getElementById('content')

const zip =     document.getElementById('zip');
const subBut =  document.getElementById("generate");
const units = 'metric'
const app_key = 'f18ec069dd1406c8d04783b9addcc2bf'
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
const tempDv = document.getElementById('temp');
const contentDev = document.getElementById('content')
const dateDev = document.getElementById('date')



subBut.addEventListener('click', (oEvent) =>{
    oEvent.preventDefault()
    
 addTemp()
 
  addProjectData();
  
  //creatDate();
});

addTemp = async (temp) => {
    
let zipcode = zip.value;
    let url=`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=${units}&appid=${app_key}`;
    
let response =  await fetch(url,{
    
    
})
let data = await response.json()
 temp = data.main.temp
tempDv.innerHTML= `<h2 id = 'temp-value'> Temperature: ${temp}</h2>`;

console.log(data)


return temp

};

addProjectData = async(data) =>{
   fetch('http://localhost:3000/',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({feelings:feelings.value,date:newDate}),
  })
  .then((res) => res.json())
    .then((data) => {
      //addTemp();
      dynamicUi(data);
      

    })
    
   
}

dynamicUi =  (projectData) =>{
  projectData.forEach((object) => {
    const li = document.createElement('li');
   
    dateDev.textContent = ` Date: ${object.date}`;
    content.textContent = `Your Feeling: ${object.feelings}`
    
  });
}