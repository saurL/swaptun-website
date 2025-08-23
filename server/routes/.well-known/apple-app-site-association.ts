export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/json');

  return {
  "applinks": {
    "details": [
      {
        "appIDs": ["TJGS234P96.com.swaptun.app"],
        "components": [
          {
            "/": "/open/*",
            "comment": "Matches any URL whose path starts with /open/"
          }
        ]
      }
    ]
  }
};
});