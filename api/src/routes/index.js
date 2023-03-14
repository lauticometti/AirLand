
const {Router} = require('express')
const {db}=require('../firebase')
const router = Router()

router.get('/prueba', async (req, res) => {

    const querySnap = await db.collection('PRUEBAS').get()
   
    const zapatillas = querySnap.docs.map(doc=> ({
        id: doc.id,
        ...doc.data()
    }))
    console.log(zapatillas);
    //trae los campos q quiero
    //elnombredelcampo: doc.data().elnombredelcampo
    
    //trae solo el primer objeto de la coleccion
   // console.log(querySnap.docs[0].data())

 
   res.send('HOLA PERRAS ')

})
///////////////////////////////////////////////////////////////
//post

router.post("/new-zapa", async (req, res) => {

    const   { NOMBRE, DETALLE, PRECIO, CATEGORIA} = req.body
    await db.collection('PRUEBAS').add({
        NOMBRE, DETALLE, PRECIO, CATEGORIA
    })
    console.log(NOMBRE, DETALLE, PRECIO, CATEGORIA)
    
    res.send("nueva zapa")
})

router.get("/edit-zapa/:id", async (req, res) =>{

    //para mostrar una zapatilla por id
    const doc = await db.collection('PRUEBAS').doc(req.params.id).get()
    console.log({
        id: doc.id,
        ...doc.data(),
    });
    res.send("edit-zapas")
   
})


router.get("/delete-zapa/:id", async (req, res) =>{

    //para mostrar una zapatilla por id
    const doc = await db.collection('PRUEBAS').doc(req.params.id).delete()

    res.send("delete-zapas")
   
})

router.get("/update-zapa/:id", async (req, res) =>{

   await db.collection("PRUEBAS").doc(req.params.id).update(req.body)
 
   
})


module.exports = router
