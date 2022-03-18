import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import TradeHistory from "./TradeHistory";
import "./styles.css";


const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

const ChannelBar = () => {
  return (
    <div className='channel-bar shadow-lg'>
            <TradeHistory />

    </div>
  );
};

const Dropdown = ({ header, selections }) => {

  return (
    <div>
      </div>
  );
};

const ChevronIcon = ({ expanded }) => {
<div>
  </div>
};

const TopicSelection = ({ selection }) => (
  <div>
      </div>
);

const ChannelBlock = () => (
  <div>
  </div>
);

export default ChannelBar;
