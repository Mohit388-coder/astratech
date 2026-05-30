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
function topnews(n) {
  for (let i = 0; i < n; i++) {
    console.log(data[i].news);
  }
}
topnews(2);

function lastnews(n) {
  for (i = data.length - n; i < data.length; i++) {
    console.log(data[i].news);
  }
}
lastnews(2);

function searchnews(data,keyword) {
  const results = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].news.includes(keyword)) {
      results.push(data[i].news);
    }
  }
  return results;
}
searchnews(data, "nepal");