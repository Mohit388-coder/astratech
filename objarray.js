const data = [
  {
    id: "a",
    news: "Pak cannot be found since 2 days"
  },

  {
    id: "b",
    news: "Charan Kanya found on North Korean border"
  },

  {
    id: "c",
    news: "From Monday Nepal will be a state of India"
  }
];
console.log(data[0].news);
console.log(data[1]);


function findbyid(id){
    for(let i =0;i<data.length;i++){
        if(data[i].id === id){
            return data[i].news;
        }
    }
}
function n_no_of_news(n){
    for(let i =0;i<n;i++){
        console.log(data[i].news)
    }
}
findbyid("b");
n_no_of_news(2);