import { cars } from '../../../carsData'

export default function handler(req, res) {
  res.status(200).json(cars)
}
