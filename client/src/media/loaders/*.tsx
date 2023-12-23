import './basic.css';
import './macOS.css';
import React, { useEffect, useState } from "react";

interface LoaderProps {
  type: 'basic' | 'macOS', 
  color?: string, 
  backgroundColor?: string,
  size?: string | null,
}

const Loader = (props: LoaderProps) => {

  const { type, color, backgroundColor, size } = props;

  const [style, setStyle] = useState<any>();

  useEffect(() => {
    if (props) {
      // set style
      let style: {} | null = null;
      if (type === 'basic') {
        style = {
          borderTop: `5px solid ${color ? color : 'rgba(140, 140, 140, 0.3)'}`,
          borderRight: `5px solid ${color ? color : 'rgba(140, 140, 140, 0.3)'}`,
          borderBottom: `5px solid ${color ? color : 'rgba(140, 140, 140, 0.3)'}`,
          borderLeft: `5px solid ${backgroundColor ? backgroundColor : 'black'}`,
          width: `${size ? size : '25px'}`,
          height: `${size ? size : '25px'}`,
        };
      }
      if (style) setStyle(style);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  if (props) switch (type) {
    case 'basic':
      return (
        <div id="basic-loader" style={style}></div> 
      )
    case 'macOS': 
      break;
  }

}

export default Loader;