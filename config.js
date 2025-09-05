// Definisikan header CORS di awal agar mudah digunakan kembali
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Mengizinkan semua domain
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Vercel akan secara otomatis menggunakan file ini sebagai handler
export default async function handler(req, res) {
  // 1. Tangani permintaan "preflight" OPTIONS dari browser
  // Ini adalah langkah penting yang sering terlewat
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Di sini Anda bisa mengambil konfigurasi dari database atau sumber lain
    const configData = {
      featureA: true,
      featureB: false,
      apiKey: 'contoh-kunci-publik', // Contoh data
    };

    // 2. Kirim respons data Anda DENGAN menyertakan header CORS
    // Di Vercel Edge/Serverless, kita gunakan 'new Response' dan 'res.json'
    if (typeof res.json === 'function') { // Untuk lingkungan Node.js
        res.status(200)
           .setHeader('Access-Control-Allow-Origin', '*')
           .json(configData);
    } else { // Untuk lingkungan Edge
        return new Response(JSON.stringify(configData), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                ...corsHeaders,
            },
        });
    }

  } catch (error) {
    // Jika terjadi error, kirim respons error juga DENGAN header CORS
    if (typeof res.json === 'function') {
        res.status(500)
           .setHeader('Access-Control-Allow-Origin', '*')
           .json({ error: error.message });
    } else {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                ...corsHeaders
            },
        });
    }
  }
}
