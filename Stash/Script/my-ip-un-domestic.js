const hashLine = "###########"
console.log(`${hashLine}ðä»£ç IP æ¥è¯¢ ---- å¼å§${hashLine}`);
$httpClient.get("http://ip-api.com/json/?lang=zh-CN", function (error, response, data) {
  console.log("[ð response data ]" + '\n' + data);
  const dataObject = JSON.parse(data);
  let { country, countryCode, regionName, city, query } = dataObject;
  country = countryCode == "CN" ? "ä¸­å½" : country;
  const region = `å°åºï¼${country} ${regionName} ${city}`;
  const ip = `IPï¼${query}`;
  const contentResult = `${ip}\n${region}`;
  console.log("[ð contentResult ]" + '\n'+ contentResult)
  console.log(`${hashLine}ðä»£ç IP æ¥è¯¢ ---- ç»æ${hashLine}`);
  $done({
    title: "ä»£ç IP åæå±å°åº",
    content: contentResult,
    backgroundColor: "#663399",
    icon: "network",
  })
})