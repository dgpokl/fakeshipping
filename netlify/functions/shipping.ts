import { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
  console.log({event, context});
  const body = {
    "rates": [
        {
            "service_name": "canadapost-overnight",
            "service_code": "ON",
            "total_price": "1295",
            "description": "This will get it there Monday",
            "currency": "CAD",
            "min_delivery_date": "2022-08-09 08:00:01 -0700",
            "max_delivery_date": "2022-08-09 08:00:01 -0700"
        },
        {
            "service_name": "fedex-2dayground",
            "service_code": "2D",
            "total_price": "2934",
            "description": "This will get it there on tuesday",
            "currency": "USD",
            "min_delivery_date": "2022-08-03 14:48:45 -0700",
            "max_delivery_date": "2022-08-03 14:48:45 -0700"
        },
        {
            "service_name": "fedex-priorityovernight",
            "service_code": "ESD",
            "description": "These are empty strings",
            "total_price": "3587",
            "currency": "USD",
            "min_delivery_date": "",
            "max_delivery_date": ""
        },
        {
          "service_name": "fedex-priorityovernight",
          "service_code": "3D",
          "description": "These are plus three days",
          "total_price": "3587",
          "currency": "USD",
          "min_delivery_date": "+3 day",
          "max_delivery_date": "+3 day"
      }

    ]
 }
  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};

export { handler };
