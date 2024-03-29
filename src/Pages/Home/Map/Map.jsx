import { useState } from "react";
import { Button } from "../../../components/ui/button";

const Map = () => {
  const [isUK, setIsUK] = useState(true);
  const [isBD, setIsBD] = useState(false);
  return (
    <div className="relative w-11/12 mmd:ml-auto rounded-xl overflow-hidden h-full">
      <Button
        onClick={() => {
          setIsBD(false);
          setIsUK(true);
        }}
        className="absolute right-16 mr-auto bg-primary text-white"
      >
        UK
      </Button>
      <Button
        onClick={() => {
          setIsUK(false);
          setIsBD(true);
        }}
        className="absolute right-2 mr-auto bg-primary text-white"
      >
        BD
      </Button>
      {isUK && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.5447628414427!2d-1.8596270230750631!3d52.469271539983794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bb98d2b9edcf%3A0x1f9f3a00b73d4337!2s514%20Coventry%20Rd%2C%20Small%20Heath%2C%20Birmingham%20B10%200UN%2C%20UK!5e0!3m2!1sen!2sbd!4v1705325239605!5m2!1sen!2sbd"
          className="w-full h-full rounded-xl  outline-none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      {isBD && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8086569436227!2d90.4199783!3d23.7898271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7416041fa7d%3A0xa21ddec8a3def4ac!2sBeximco%20Communication!5e0!3m2!1sen!2sbd!4v1706189331825!5m2!1sen!2sbd"
          className="w-full h-full rounded-xl  outline-none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
};

export default Map;
