import React from "react";

const ModalOverlay = (props: any) => {

  const { opacity, fadeIn, borderRadius } = props;

  return (
    <div id="modal-overlay" 
      style={{opacity: opacity ? opacity : '0.8', borderRadius: borderRadius ? borderRadius : 'none'}}
      className={fadeIn && 'fade-in-modal'}
    >
    </div>
  );
}
 
export default ModalOverlay;