import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler<string> = async ({ request, redirect }) => {
    const lang = request.headers.get("accept-language")?.split(",")[0]?.slice(0, 2) || "en";
    throw redirect(301, `/${lang === "de" ? "de" : "en"}`);
};
