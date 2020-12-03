const {data}=require("./data");

var totalRecovered=0;
data.forEach((state)=>{
    totalRecovered=totalRecovered+state.recovered;
})

module.exports={totalRecovered}