const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index', { titulo: "Clase express - pug" })
})

router.get('/login', (req, res) => {
    res.render('login', { title:'Login',error: false })
})

router.post('/signin', (req, res) => {
    console.log(req.body.email)
    const {email, password} = req.body;
    email === 'ingridlo@correo.com' && password === '12345'?
    res.render('dashboard',{
        title: 'Dashboard',
        datos:{
            email,
            alumnos:[
                'Ingrid',
                'Brayan',
                'Luis'
            ]
        }
    })
    : res.render('login',{error:true})    
})

module.exports = router;