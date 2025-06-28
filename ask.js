const axios = require('axios');

export default async function handler(req, res) {
  const { text } = req.body;

  const model_list = {
    chatgpt4: {
      api: 'https://stablediffusion.fr/gpt4/predict2',
      referer: 'https://stablediffusion.fr/chatgpt4'
    },
    chatgpt3: {
      api: 'https://stablediffusion.fr/gpt3/predict',
      referer: 'https://stablediffusion.fr/chatgpt3'
    }
  };

  let results = [];

  for (const [model, config] of Object.entries(model_list)) {
    try {
      const hmm = await axios.get(config.referer);
      const { data } = await axios.post(config.api, { prompt: text }, {
        headers: {
          accept: '*/*',
          'content-type': 'application/json',
          origin: 'https://stablediffusion.fr',
          referer: config.referer,
          cookie: hmm.headers['set-cookie'].join('; '),
          'user-agent': 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36'
        }
      });
      results.push(`*${model.toUpperCase()}*:\n${data.message || 'Tidak ada jawaban.'}`);
    } catch (err) {
      results.push(`*${model.toUpperCase()}*:\nGagal mengambil jawaban.`);
    }
  }

  res.status(200).json({ result: results.join('\n\n') });
}