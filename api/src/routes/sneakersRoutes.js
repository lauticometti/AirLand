
const { Router } = require('express')
const { db } = require('../firebase')
const router = Router()

router.get('/', async (req, res) => {
    try {
        const querySnap = await db.collection('PRUEBAS').get()
        const sneakers = querySnap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        res.status(200).json({
            ok: true,
            sneakers
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error.message
        })
    }

    //trae los campos q quiero
    //elnombredelcampo: doc.data().elnombredelcampo

    //trae solo el primer objeto de la coleccion
    // console.log(querySnap.docs[0].data())

})

router.post("/sneakers", async (req, res) => {

    const { ACTION, CODE, RATING, REVIEW, IMAGE, NAME, PRICE, SIZE, STATUS, STOCK } = req.body
    try {
        await db.collection('PRUEBAS').add({
            ACTION, CODE, RATING, REVIEW, IMAGE, NAME, PRICE, SIZE, STATUS, STOCK
        })
        res.status(201).json({
            ok: true,
            message: 'Succesfuly created!'
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error.message
        })
    }
})

router.get("/sneakers/:id", async (req, res) => {

    //para mostrar una zapatilla por id
    try {
        const sneaker = await (await db.collection('PRUEBAS').doc(req.params.id).get()).data()
        res.status(200).json({
            ok: true,
            sneaker
        })
    } catch (error) {
        res.status(400)
    }
})

router.delete("/sneakers/:id", async (req, res) => {

    //para mostrar una zapatilla por id
    const { STATUS } = req.body
    try {
        await db.collection('PRUEBAS').doc(req.params.id).update({ STATUS })
        res.status(200).json({
            ok: true,
            message: 'Succesfuly deleted!'
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error.message
        })
    }

})

router.patch("/sneakers/:id", async (req, res) => {
    try {
        await db.collection("PRUEBAS").doc(req.params.id).update(req.body)
        res.status(200).json({
            ok: true,
            message: 'Succesfuly updated!'
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error.message
        })
    }
})

module.exports = router
