console.log("This is our project");
//14c0ba9bc7644d09ab41284ae325b66a
//https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}
// Initialize the news api parameters
var url = 'https://newsapi.org/v2/everything?' +
'q=Apple&' +
'from=2023-01-30&' +
'sortBy=popularity&' +
'apiKey=14c0ba9bc7644d09ab41284ae325b66a';

var req = new Request(url);

fetch(req)
.then(function(response) {
console.log(response.json());
})
let source = 'the-times-of-india';
let apiKey = '14c0ba9bc7644d09ab41284ae325b66a'


const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")

    }
}

xhr.send()


