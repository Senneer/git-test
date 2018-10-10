const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
let server,
    store = {
    home: {
        page: 'Main page',
        content: 'kakoi-to text(1)'
    },
    about: {
        page: 'About page',
        content: 'kakoi-to text(2)'
    },
    downloads: {
        page: 'Downloads page',
        content: 'kakoi-to text(3)'
    },
    profile: {
        page: 'Profile page',
        content: 'kakoi-to text(4)'
    }
}
let storeKeys = Object.keys(store); 

app.disable('x-powered-by');
app.set('view engine', 'jade');

app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
})

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/about', function(req, res){
    res.render('about', {
        links: storeKeys
    });
});

app.route('/new')
    .get(function(req, res){
        res.render('new', {
            page: 'Add New',
            links: storeKeys
        })
    })
    .post(function(req, res){
        let data = req.body;
        if (data.pageurl && data.pagename && data.pagecontent) {
            store[data.pageurl] = {
                page: data.pagename,
                content: data.pagecontent
            };
            storeKeys = Object.keys(store);
        }
        res.redirect('/');
    });

app.get('/:page?', function(req, res){
    let page = req.params.page; 
    let data;
    if (!page) {
        page = 'home';
    }
    data = store[page];
    if (!data) {
        res.redirect('/');
    }
    data.links = storeKeys;
    res.render('main', data);
});

server = app.listen(3000, function(){
    console.log('Listening on port 3000');
});
