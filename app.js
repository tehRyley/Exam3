/* 
  Name: Ryley Green
  Project: Exam 3
  Date: 5/19/2022 
*/

Vue.component("quotes", {
  template: `
  <div>
    <h1>{{ author }}</h1>
    <button @click=$root.get()>test</button>
  </div>
  `,
  props: ["author"],
});

const app = new Vue({
  el: "#app",
  data: {
    author: [],
    texts: [],
    quotes: [],
  },
  methods: {
    //API requests and stores data
    get() {
      axios({
        method: "get",
        url: "https://quote-garden.herokuapp.com/api/v3/quotes",
      }).then(function (response) {
        this.quotes = response.data.data;
        console.log(this.quotes);
      });
      for (i = 0; (i = this.quotes.length); i++) {
        this.author[i] = this.quotes[i].quoteAuthor;
        this.texts[i] = this.quotes[i].quoteText;
        console.log(this.author);
      }
    },
  },
  //Request on load
  beforeMount() {
    this.get();
  },
});
