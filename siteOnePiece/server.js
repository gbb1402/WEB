import express from 'express';
import axios from 'axios';
import cors from 'cors';

//configuration du server
const app = express();
const port = 3001;
const apiKey = "c048d310d681f8535a792613a4df14194af0e2109fe6d7d44de0d49c21824699";

app.use(cors());//activation du cors

//fonction get avec deux paramètre page et nombre de carte
app.get('/api/cards', async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 25;

  //appel de l'API
  try {
    const response = await axios.get(`https://apitcg.com/api/one-piece/cards?page=${page}&limit=${limit}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });

    //récupération des données
    res.json(response.data);
  } catch (error) {//si on a un problèmes:
    console.error('Error fetching cards:', error.response?.data || error.message);
    res.status(500).json({ message: 'Error fetching cards' });
  }
});

app.listen(port, () => {//server local pour écouter si on demande des cartes one piece
  console.log(`Server is running on http://localhost:${port}`);
});
