import React from 'react';

export type FooterProps = {
  copyright:string;
}
export const Footer: React.FC<FooterProps> = (props) => (
  <footer style={{color: "grey"}}>Created {props.copyright}</footer>
);
