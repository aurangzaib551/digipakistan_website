import React from "react";
import HelpIcon from "@material-ui/icons/HelpRounded";
import ButtonBase from "@material-ui/core/ButtonBase";
import $ from "jquery";

const Help = () => {
  const handleHelp = () => {
    setTimeout(() => {
      $(".p").toggleClass("animation");
      $(".faq-help").toggleClass("help-open");
    }, 400);
  };
  return (
    <div className="faq-help d-flex align-items-center justify-content-between">
      <div className="message-help d-flex flex-column align-items-center w-100">
        <p className="mb-0 p text-white">More Questions?</p>
        <p className="mb-0 p text-white">email us at</p>
        <p className="mb-0 p text-white">helpdesk@digipakistan.org</p>
        <p className="mb-0 p text-white">or call us at</p>
        <p className="mb-0 p text-white">042-35974881</p>
        <p className="mb-0 p text-white">042-35974882</p>
      </div>
      <ButtonBase onClick={handleHelp} className="faqs-help-btn outline">
        <HelpIcon className="text-white icon-help" />
      </ButtonBase>
    </div>
  );
};

export default Help;
