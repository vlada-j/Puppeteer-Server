export function getUrlFromQuery(query) {
	const url = query.url;

	if (typeof url !== "string" || url.trim() == "") {
		throw new Error("URL is not provided");
	}

	return decodeURIComponent( url )
}
