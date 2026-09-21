import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "5mb" }));

// Initialize Gemini API client lazily / safely
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY topilmadi! Iltimos, AI Studio Secrets bo'limida API kalitni kiriting.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// API Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// AI Problem Solver Endpoint for Chemistry and Biology
app.post("/api/solve", async (req, res) => {
  try {
    const { subject, problemText, grade } = req.body;
    if (!problemText || typeof problemText !== "string") {
      return res.status(400).json({ error: "Masala matni kiritilmagan!" });
    }

    const ai = getGeminiClient();

    const systemPrompt = `Siz tajribali O'zbekiston Milliy Ta'lim Tizimi bo'yicha Kimyo va Biologiya fani o'qituvchisisiz va masalalar yechish bo'yicha mutaxassissiz.
Foydalanuvchi ${subject === "kimyo" ? "Kimyo" : "Biologiya"} fanidan masala yoki savol berdi.
Sinf darajasi: ${grade || "Umumiy"}.

Iltimos, javobni quyidagi o'zbek tilidagi chiroyli va tushunarli formatda taqdim eting:
1. **Masala sharti va berilganlar** (Qisqacha berilganlar: m, M, V, n, DNA/DNK ketma-ketligi, va h.k.)
2. **Kerali formulalar va tushunchalar**
3. **Bosqichma-bosqich yechim** (Har bir amallarni batafsil tushuntirib bering)
4. **Yakuniy javob** (Alohida belgilangan ko'rinishda)
5. **O'qituvchidan qo'shimcha maslahat yoki o'xshash mashq**

Matnni tushunarli, aniq, pedagogik va motivatsion tarzda yozing. Markdown formatidan foydalaning.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: problemText,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.3,
      },
    });

    const resultText = response.text || "Javob hosil qilib bo'lmadi.";
    return res.json({ solution: resultText });
  } catch (err: any) {
    console.error("Error solving problem:", err);
    return res.status(500).json({
      error: err.message || "Masalani yechishda xatolik yuz berdi. Qayta urinib ko'ring.",
    });
  }
});

// AI Topic Explanation Endpoint
app.post("/api/explain-topic", async (req, res) => {
  try {
    const { subject, topicTitle, grade } = req.body;
    if (!topicTitle) {
      return res.status(400).json({ error: "Mavzu nomi kiritilmagan!" });
    }

    const ai = getGeminiClient();

    const systemPrompt = `Siz ${grade ? `${grade}-sinf` : ""} ${subject === "kimyo" ? "Kimyo" : "Biologiya"} fani o'qituvchisisiz.
"${topicTitle}" mavzusini o'quvchi va o'qituvchilar uchun juda qiziqarli, batafsil va hayotiy misollar bilan tushuntirib bering.
Mavzu strukturasi:
- **Mavzu mohiyati va ta'rifi**
- **Asosiy tushunchalar va atamalar**
- **Amaliy va hayotiy misollar**
- **Qiziqarli faktlar**
- **Mavzuni mustahkamlash uchun 3 ta savol**

O'zbek tilida, rang-barang va o'qilishi oson Markdown formatida yozing.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `Mavzu: ${topicTitle}. ${grade ? `${grade}-sinf darajasida` : ""}`,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.4,
      },
    });

    return res.json({ explanation: response.text });
  } catch (err: any) {
    console.error("Error explaining topic:", err);
    return res.status(500).json({
      error: err.message || "Mavzuni tushuntirishda xatolik yuz berdi.",
    });
  }
});

// AI Custom Quiz Generator
app.post("/api/generate-quiz", async (req, res) => {
  try {
    const { subject, topic, grade, count = 5 } = req.body;
    const ai = getGeminiClient();

    const systemPrompt = `Siz ${subject === "kimyo" ? "Kimyo" : "Biologiya"} fanidan test savollari tuzuvchi ekspertsiz.
${grade ? `${grade}-sinf` : ""} ${topic ? `"${topic}" mavzusi` : "umumiy dastur"} bo'yicha ${count} ta 4 ta variantli (A, B, C, D) interaktiv test savoli tuzing.

Javobingiz faqatgina quyidagi JSON formatida bo'lishi SHART:
[
  {
    "question": "Savol matni",
    "options": ["Variant A", "Variant B", "Variant C", "Variant D"],
    "correctIndex": 0,
    "explanation": "To'g'ri javobning batafsil tushuntirilishi"
  }
]`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `Test tuzish so'rovi: ${subject}, ${topic}, ${grade}-sinf.`,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        temperature: 0.5,
      },
    });

    const questions = JSON.parse(response.text || "[]");
    return res.json({ questions });
  } catch (err: any) {
    console.error("Error generating quiz:", err);
    return res.status(500).json({
      error: err.message || "Test savollarini yaratishda xatolik yuz berdi.",
    });
  }
});

// Vite Middleware or Static Delivery
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
