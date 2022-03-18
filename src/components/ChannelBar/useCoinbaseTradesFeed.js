import { useState, useEffect } from "react";

const client = new WebSocket("wss://ws-feed.pro.coinbase.com");

let sequence = 100;
export default function useCoinbaseTradesFeed(product_id, depth = undefined) {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    client.onopen = () => {
      client.send(
        JSON.stringify({
          type: "subscribe",
          product_ids: [product_id],
          channels: ["ticker"]
        })
      );
    };

    client.onerror = (err) => {
      console.error(`Socket encountered error: ${err.message}. Closing socket`);
      client.close();
    };

    client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.log(data);
      if (data.type === "ticker") {
        const trade = {
          size: data.last_size,
          price: data.price,
          side: data.side,
          time: data.time,
          id: sequence++
        };
        setTrades((prevState) => [
          trade,
          ...prevState.slice(0, depth ?? prevState.length)
        ]);
      }
    };

    setTimeout(() => {
      client.close();
    }, 1500000);

    return () => {
      client.close();
    };
  }, [product_id, depth]);

  return trades;
}
