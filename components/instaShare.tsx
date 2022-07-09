import styles from '../styles/Home.module.css'
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

function instaShare() {
   
    var htmlToImage = require('html-to-image');

function handleClick() {
let quoteBox = document.getElementById('quoteBox')

    htmlToImage.toPng(quoteBox)
  .then(function (dataUrl: string) {
    var img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
  })
  .catch(function (error: any) {
    console.error('oops, something went wrong!', error);
  });
}

    return (
        <AiOutlineTwitter className={styles.tweet} onClick={()=>handleClick()} />
    )
}

export default instaShare