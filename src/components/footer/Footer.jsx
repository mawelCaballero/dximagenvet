import React from "react";
import CookieBanner from "react-cookie-banner";

export const Footer = () => {
  return (
    <footer className="py-5 bg-dark">
      <div className="container px-4">
        <p className="m-0 text-center text-white">
          Copyright &copy; DxImagenVet 2021
        </p>
      </div>
      <CookieBanner
        message="Si, usamos cookies. Si no te gusta, puedes irte. No te charemos de menos!"
        onAccept={() => {}}
        cookie="user-has-accepted-cookies"
        dismissOnScroll={false}
      />
    </footer>
  );
};
