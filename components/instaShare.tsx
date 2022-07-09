import styles from '../styles/Home.module.css'
import { AiOutlineInstagram } from "react-icons/ai";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

function instaShare() {
   
    var htmlToImage = require('html-to-image');

function handleClick() {
let quoteBox = document.getElementById('quoteBox')

    htmlToImage.toPng(quoteBox, {  width: 400,
        height: 300})
  .then(function (dataUrl: string) {
    const link = document.createElement('a');
    link.download = 'file name';
    link.href =dataUrl;
    document.body.appendChild(link);

    // Trigger the click event
    link.click();
    
    // Remove the element
    document.body.removeChild(link);
  })
  .catch(function (error: any) {
    console.error('oops, something went wrong!', error);
  });
}

    return (
        <AiOutlineInstagram className={styles.tweet} onClick={()=>handleClick()} />
    )
}

export default instaShare