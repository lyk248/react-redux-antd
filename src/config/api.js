let host, baseUri;

if(process.env.NODE_ENV == "development" || process.env.NODE_ENV == "test"){
  host = "http://localhost:4000";
  baseUri = host + "/";
}else{
  host = location.origin;
  baseUri = host + "/api/";
}

export const API_CONFIG = {
  host: host,
  baseUri: baseUri,
  auth: 'auth'
};
