const { Car } = require('../model/car')


class CarController {
    async create(req, res) {
        try {
            const {  image,
                name,
                price,
                country,
                description,
                fuel,
                brand,
                year} = req.body

            const car = await Car.create({ image,
                name,
                price,
                country,
                description,
                fuel,
                brand,
                year})

            return res.json(car)

        } catch (e) {
            console.log("Nigger")
        }
    }
}

module.exports = new CarController()