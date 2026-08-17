import { headers } from "next/headers";
import { connection } from "next/server";
import { Tashrif } from "tashrif/react";

const CLIENT_IDS: Record<string, string> = {
    "online-savdo.uz": process.env.ONLINE_SAVDO_CLIENT_ID!,
    "onlinesavdo.uz": process.env.NEXT_PUBLIC_TASHRIF_ONLINESAVDO_CLIENT_ID!,
    "manhwa.uz": process.env.NEXT_PUBLIC_TASHRIF_MANHWA_CLIENT_ID!,
};

function hostnameFromHost(host: string | null): string {
    if (!host) return "";
    return host
        .split(":")[0]
        .replace(/^www\./, "")
        .toLowerCase();
}

export async function TashrifByDomain() {
    await connection();
    const headerList = await headers();
    const hostname = hostnameFromHost(headerList.get("host"));
    const clientId = CLIENT_IDS[hostname];

    console.log("hostname", hostname);
    console.log(CLIENT_IDS);

    if (!clientId) return null;

    return <Tashrif clientId={clientId} />;
}
