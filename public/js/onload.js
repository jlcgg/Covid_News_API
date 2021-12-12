window.onload = () => {
    (async () => {
        var selected = '';
        var ele = document.getElementsByName('btnradio');
                
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked){
            selected = ele[i].getAttribute("value")
            }
            
        }

        const urlBase = "http://localhost:8080/api/" + selected;
        const listArticles = document.getElementById("articles");
        const desc = document.getElementById("desc");
        let texto = "";
        
        if(selected == "home"){
            listArticles.innerHTML = "";
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

        var myHeaders = new Headers();

        var myInit = { method: "GET", headers: myHeaders};

        var myRequest = new Request(`${urlBase}`, myInit);

        await fetch(myRequest).then(async function (response){
            if(!response.ok) {
                listArticles.innerHTML = "In order to view the content, you have to register and login to your account.";
            }else{
                articles = await response.json();
                listArticles.innerHTML = texto;
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
                listArticles.innerHTML = texto;
            }
        });

    })();
}