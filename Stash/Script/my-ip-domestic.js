const hashLine = "###########"
console.log(`${hashLine}ðç´è¿ IP æ¥è¯¢ ---- å¼å§${hashLine}`);
$httpClient.get("https://forge.speedtest.cn/api/location/info", function (error, response, data) {
  console.log("[ð response data ]" + '\n' + data);
  const dataObject = JSON.parse(data);
  let { country, country_code, province, city, ip } = dataObject;
  console.log("[ country ]-7" + country)
  country = country_code == "CN" ? "ä¸­å½" : country;// å½å®¶
  console.log("[ country ]-9" + country)
  const region = `å°åºï¼${country} ${province} ${city}`;
  console.log("[ region ]-10" + region)
  ip = `IPï¼${ip}`;
  console.log("[ ip ]-12" + ip)
  const contentResult = `${ip}\n${region}`;
  console.log("[ð contentResult ]" + '\n'+ contentResult)
  console.log(`${hashLine}ðç´è¿ IP æ¥è¯¢ ---- ç»æ${hashLine}`);
  $done({
    title: "ç´è¿ IP åæå±å°åº",
    content: contentResult,
    backgroundColor: "#663399",
    icon: "network",
  })
})