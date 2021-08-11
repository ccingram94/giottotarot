import { cards } from '../../cards.js'

export default async (req, res) => {
    res.status(200).json(cards);
  };
  