import { Handler } from "@netlify/functions";
let counter = 0;
const handler: Handler = async (event, context) => {
  console.log({ event, context });
  counter = counter + 1;
  const body = {
    rates: [
      {
        service_name: `This has run ${counter} times`,
        service_code: "ON",
        total_price: "1295",
        description: "This will get it there Monday",
        currency: "CAD",
        min_delivery_date: "2021-08-09 08:00:01 -0700",
        max_delivery_date: "2021-08-09 08:00:01 -0700",
      },
      {
        service_name: "fedex-2dayground",
        service_code: "2D",
        total_price: "2934",
        description: "This will get it there on tuesday",
        currency: "USD",
        min_delivery_date: "2021-08-03 14:48:45 -0700",
        max_delivery_date: "2021-08-03 14:48:45 -0700",
      },
      {
        service_name: "empty string dates",
        service_code: "ESD",
        description: "These are empty strings\nHere is another line omg",
        total_price: "3587",
        currency: "USD",
        min_delivery_date: "",
        max_delivery_date: "",
      },
      {
        service_name: "multi line",
        service_code: "JLSIDJ",
        description: "These are empty strings<hr>HTML Injection?<hr>Here is another line omg",
        total_price: "3587",
        currency: "USD",
        min_delivery_date: "",
        max_delivery_date: "",
      },
      {
        service_name: "xyz123",
        service_code: "3D",
        description: "A week from Tuesday days with a 2 more day window",
        total_price: "3587",
        currency: "USD",
        min_delivery_date: "2021-08-10 14:48:45 -0700",
        max_delivery_date: "2021-08-12 14:48:45 -0700",
      },
    ],
  };
  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};

export { handler };
