import React from "react";
import { CSSTransition } from "react-transition-group";
import useCoinbaseTradesFeed from "./useCoinbaseTradesFeed";

export default function TradeHistory() {
  const trades = useCoinbaseTradesFeed("BTC-USD", 70);

  //console.log(trades);
  const mappedTrades = trades.map((trade) => {
    //console.log(trade);
    const addLeadingZero = (time) => (time < 10 ? "0" + time : time);

    const time = new Date(trade.time);
    const hours = addLeadingZero(time.getHours());
    const minutes = addLeadingZero(time.getMinutes());
    const seconds = addLeadingZero(time.getSeconds());

    const size = /(.*?)(0*)$/.exec(Number(trade.size).toFixed(4)).slice(1);
    const sizePreTrailingZeros = size[0];
    const sizeTrailingZeros = size[1];

    return (
      <CSSTransition
        in={true}
        timeout={300}
        appear={true}
        classNames="highlight"
        key={trade.id}
      >
        <div
          className={
            "TradeHistory__trade " +
            (trade.side === "buy"
              ? "TradeHistory__trade--buy"
              : "TradeHistory__trade--sell")
          }
        >
          <div className="TradeHistory__size">
            <span>{sizePreTrailingZeros}</span>
            <span className="TradeHistory__size--trailing">
              {sizeTrailingZeros}
            </span>
          </div>
          <div
            className={
              "TradeHistory__price " +
              (trade.side === "buy"
                ? "TradeHistory__price--buy"
                : "TradeHistory__price--sell")
            }
          >
            {Number(trade.price).toFixed(2) +
              (trade.side === "buy" ? "↗" : "↘")}
          </div>
          <div className="TradeHistory__time">{`${hours}:${minutes}:${seconds}`}</div>
        </div>
      </CSSTransition>
    );
  });

  return (
    <div className="TradeHistory">
      <div className="TradeHistory__title">Trade History</div>
      <div className="TradeHistory__header">
        <div className="TradeHistory__headerSize">Trade Size</div>
        <div className="TradeHistory__headerPrice">Price (USD)</div>
        <div className="TradeHistory__headerTime">Time</div>
      </div>
      <div className="TradeHistory__panel">{mappedTrades}</div>
    </div>
  );
}
