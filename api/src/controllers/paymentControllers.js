const { getShoppingCart } = require("./shoppingCartControllers")
const mercadopago = require("mercadopago")

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
})

const createPreference = async (userId) => {
  let order

  try {
    order = await getShoppingCart(userId)
  } catch (error) {
    throw new Error(error.message)
  }

  const preference = {
    items: order.map(zapatilla => ({
      title: zapatilla.name,
      unit_price: Number(zapatilla.unityPrice),
      quantity: Number(zapatilla.quantity)
    })),

    back_urls: {
      "success": "http://localhost:5173/",
      "failure": "http://localhost:5173/",
      "pending": "http://localhost:5173/"
    },
    auto_return: "approved",
  }

  const response = mercadopago.preferences.create(preference)
    .then(res => {
      return {
        res: res,
        isApproved: res.body.auto_return === 'approved' ? true : false,
        paymentId: res.body.id,
        init_point: res.body.init_point,
        dateCreated: new Date(res.body.date_created).toLocaleDateString()
      };
    })
    .catch(error => {
      throw new Error(error)
    });

  return response
}

module.exports = {
  createPreference
}