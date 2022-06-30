$httpClient.get("http://ip-api.com/json/?lang=zh-CN", function (error, response, data) {
  console.log("[🎉 dataObject ]" + dataObject)
  const dataObject = JSON.parse(data);
  let { country, countryCode, regionName, city, query } = dataObject;
  console.log("[ country - old ]-5", country)
  country = countryCode === "CN" ? "中国" : country;
  console.log("[ country - new ]-6" + country)
  const region = `地区：${country} ${regionName} ${city}`;
  const ip = `IP：${query}`;
  const contentResult = `${ip}\n${region}`;
  console.log("[ contentResult ]-7" + contentResult)
  $done({
    title: "当前 IP 及所属地区",
    content: contentResult,
    backgroundColor: "#663399",
    icon: "network",
  })
})