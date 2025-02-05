import React from "react";
import "../../styles/iconsFloating.css";

const icons = [
    { class: "fa-solid fa-headphones", top: "40%", left: "8%" },
    { class: "fa-solid fa-globe", top: "22%", left: "52%" },
    { class: "fa-solid fa-microphone", top: "25%", left: "78%" },
    { class: "fa-solid fa-heart", top: "35%", left: "36%" },
    { class: "fa-brands fa-youtube", top: "32%", left: "65%" },
    { class: "fa-brands fa-facebook", top: "43%", left: "24%" },
    { class: "fa-brands fa-instagram", top: "52%", left: "86%" },
    { class: "fa-solid fa-lightbulb", top: "56%", left: "10%" },
    { class: "fa-solid fa-thumbs-up", top: "67%", left: "90%" },
    { class: "fa-solid fa-chart-line", top: "69%", left: "18%" },
    { class: "fa-solid fa-store", top: "74%", left: "78%" },
    { class: "fa-brands fa-tiktok", top: "22%", left: "27%" },
    { class: "fa-solid fa-bullseye", top: "80%", left: "8%" },
    { class: "fa-solid fa-laptop", top: "87%", left: "32%" },
    { class: "fa-solid fa-cart-shopping", top: "81%", left: "62%" },
    { class: "fa-solid fa-user-large", top: "90%", left: "50%" },

    { class: "fa-solid fa-cloud-arrow-up", top: "46%", left: "53%" },
    { class: "fa-solid fa-cart-plus", top: "41%", left: "75%" },

    { class: "fa-solid fa-wifi", top: "64%", left: "58%" },
    { class: "fa-solid fa-camera-retro", top: "74%", left: "37%" },

    { class: "fa-brands fa-pinterest", top: "60%", left: "28%" },
    { class: "fa-solid fa-chalkboard", top: "58%", left: "76%" },

    { class: "fa-solid fa-video", top: "31%", left: "90%" },
    { class: "fa-solid fa-bullhorn", top: "31%", left: "15%" },
    { class: "fa-solid fa-chart-pie", top: "88%", left: "85%" },
    { class: "fa-solid fa-robot", top: "90%", left: "14%" },

    { class: "fa-solid fa-earth-americas", top: "54%", left: "43%" }
];

export const IconsFloating = () => {
    return (
        <div className="floating-icons">
            {icons.map((icon, index) => (
                <i
                    key={index}
                    className={`floating-icon ${icon.class}`}
                    style={{ top: icon.top, left: icon.left }}
                ></i>
            ))}
        </div>
    );
};
