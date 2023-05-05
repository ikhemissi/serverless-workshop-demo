import { Context, HttpRequest, HttpResponse } from "@azure/functions";

const fileUploadingUrl = process.env.FILE_UPLOADING_URL;

export default async function (context: Context, req: HttpRequest): Promise<HttpResponse> {
    try {
        if (!fileUploadingUrl) {
            throw new Error('Missing environment variable FILE_UPLOADING_URL');
        }

        const response = await fetch(fileUploadingUrl, {
            method: 'POST',
            body: req.bufferBody,
            headers: {
                'Content-Type': req.headers['content-type'],
            },
        });

        return {
            status: response.status,
            body: await response.text(),
        };
    } catch (error) {
        return {
            status: 500,
            body: JSON.stringify({
                error: error.message,
            }),
        };
    }
};
