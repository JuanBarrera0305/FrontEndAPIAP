new gridjs.Grid({
    search: true, 
    sort: true, 
    pagination: true, 
    fixedHeader: true, 
    height: "90%",

    columns: [
      { name: "id", width: "200px" },  
      { name: "booktype", width: "200px" }, 
      { name: "bookname", width: "200px" } ],

    server: {
      url: "http://localhost:8004/api/v1/Library",
      then: (data) => {
          data.sort((a,b) => b.id - a.id);
          return data.map((book) => [
              book.id, 
              book.booktype, 
              book.bookname
            ]);
        }
    },
}) .render(document.getElementById("table"));