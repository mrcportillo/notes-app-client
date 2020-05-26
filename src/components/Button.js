import React from "react";
import { Button as BaseButton, Glyphicon } from "react-bootstrap";
import "./button.css";

export default function Button({ isLoading, className, ...props }) {
  return (
    <BaseButton
      disabled={isLoading}
      className={`LoaderButton ${className}`}
      {...props}
    >
      {isLoading && <Glyphicon glyph="refresh" className="spinning" />}
      {props.children}
    </BaseButton>
  );
}
