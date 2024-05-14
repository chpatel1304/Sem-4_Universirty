var url = require("url")
addr="http://localhost:8085/default.html?Name=ProfKhusbu_Patel&initial=pkp"
var q=url.parse(addr,false)
console.log(q);
console.log(q.host);
console.log(q.pathname);
console.log(q.query);