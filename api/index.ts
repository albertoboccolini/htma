import express, { Request, Response } from "express";
import TurndownService from "turndown";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();

const turndownService = new TurndownService();

app.get("/", async (req: Request, res: Response): Promise<any> => {
	const url = req.query.url as string;

	if (!url) {
		return res.status(400).json({ error: "Missing URL parameter" });
	}

	try {
		const headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
			Accept: "text/html,application/xhtml+xml",
			"Accept-Language": "it-IT,it;q=0.9",
			Connection: "keep-alive",
			Referer: "https://www.google.com/",
			DNT: "1",
		};

		const response = await fetch(url, { headers: headers });
		if (!response.ok) {
			throw new Error(`Failed to fetch URL. Status: ${response.status}`);
		}

		const html = await response.text();
		turndownService.remove("script");
		turndownService.remove("style");
		const markdown = turndownService.turndown(html);

		res.send({
			markdown: markdown,
		});
	} catch (err: any) {
		res.status(500).json({
			error: "Error fetching or converting page",
			details: err.message,
		});
	}
});

export default (req: VercelRequest, res: VercelResponse) => {
	app(req as any, res as any);
};
