var i=0; 
function rece(){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
      'X-RapidAPI-Key': '98f139625emsh4c9f7b4f0e29f81p1553dcjsndbb273a68cba'
    }
  };
  
  fetch('https://crypto-news-live3.p.rapidapi.com/news', options)
    .then(response => { return response.json() })
    .then(news)
    .catch(err => console.error(err));

    function news(response)
    {
        let news = document.getElementById('news');
        let newss = document.getElementById('newss');
news.innerHTML = response[i].title +" Source -"+ response[i].source;
newss.innerHTML = response[i+10].title  +" Source -"+ response[i].source;
i++;
}
}setInterval( rece , 1000)