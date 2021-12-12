async function getArticles() {
    var selected = '';
    var ele = document.getElementsByName('btnradio');
              
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
          selected = ele[i].getAttribute("value")
        }
        
    }

    console.log(selected)
    document.getElementById
    const urlBase = "http://localhost:8080/api/";
    
    const listaArticles = document.getElementById("articles");
    const desc = document.getElementById("desc");
    let texto = "";

    if(selected == "home"){
      listaArticles.innerHTML = "";
      desc.innerHTML = "";

      texto +=    ` <div class="card text-white">
      <img src="images/covid.jpg" class="card-img" alt="covid">
      <div class="card-img-overlay">
        
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title mb-2 text-muted">Covid News</h5>
            <p class="card-text mb-2 text-muted">In this API we can see news about covid in several languages, namely English, Portuguese, Spanish and Italian.</p>
          </div>
        </div>

      </div>

    </div>`
    
      ;


      desc.innerHTML = texto;

      return;
  }else{
    desc.innerHTML = "";
  }


    let myHeaders = new Headers();
    let url = urlBase + selected;
    
    console.log("URL: " + url);

    const token = localStorage.token;
    console.log(token)

    //const myInit = { method: "GET", headers: myHeaders };
    const myInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    const myRequest = new Request(url, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        listaArticles.innerHTML = "In order to view the content, you have to register and login to your account.";
      } else {
        articles = await response.json();
        listaArticles.innerHTML = "";
        for(const article of articles){
            texto += `
            <div class="card border-light" >
            <div class="col">
                <div class="card-header">${article.source}</div>
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text"><button type="button" class="btn btn-outline-primary"><a href="${article.url}">Go to site</a></button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        }
        
        listaArticles.innerHTML = texto;
      }
    });

  }
  