var i=0; 
function rece(){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
      'X-RapidAPI-Key': '98f13962dcjsndbb273a68cba' // API is wrong , you need to get a new one from the host site.
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
