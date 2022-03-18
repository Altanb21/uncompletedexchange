import TopNavigation from '../TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';
// import { useState } from 'react';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import './styles.css';
import { Slider } from '@material-ui/core'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from "@material-ui/core/styles";

const ContentContainer = () => {
  return (
    <div className='content-container'>
      <TopNavigation />
      <div className='content-list'>
      <AdvancedRealTimeChart theme="dark" hide_legend={false}  symbol="btcusdt" interval="1D" allow_symbol_change="false" show_popup_button={false}  save_image={false}  height={600}width={1237}></AdvancedRealTimeChart>
            </div>
      <BottomBar />
    </div>
  );
};


const BottomBar = () => (
  <div>
    <form>
  <label>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <TextField
    label="Amount BTC"
    defaultValue="Hello World"
    margin="dense"
    variant="outlined"
    size="small"
    autoFocus
    lineDirection="center"
    required={true}
    type="number"
    maxLength={12}
    erorText="Please enter only 12 digits number"
    color={'primary'}
    
  />
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        <TextField
    label="Amount BTC"
    defaultValue="Hello World"
    margin="dense"
    variant="outlined"
    size="small"
    autoFocus
    lineDirection="center"
    required={true}
    type="number"
    maxLength={12}
    erorText="Please enter only 12 digits number"
  />
  </label>
</form>
<p> &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; </p>
<Slider />

    <button class="glow-on-hover" type="button">Buy&nbsp;&nbsp;&nbsp; </button>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="glow-on-hover" type="button">Sell</button>

  </div>
);

const Post = ({ name, timestamp, text }) => {

  const seed = Math.round(Math.random() * 100);
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default ContentContainer;
