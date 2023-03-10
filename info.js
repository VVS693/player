// https://drive.google.com/file/d/1gF7aNn-uzgRlHRFN16t9QIS2ev0iKTBA/view?usp=sharing
// https://drive.google.com/file/d/1XbXgBvpDkbopg7UZWK9gDDP7vHPJ-Cr8/view?usp=sharing

// https://drive.google.com/file/d/1j7az9F5647NZw1ezp3ZF2fs5hxnVIH9o/view?usp=sharing
// https://drive.google.com/file/d/1sV5GlTULNtEdwKXHi1UjM-riHQFAVIt9/view?usp=sharing

// https://drive.google.com/file/d/1psKF8FESB4U_lb3dqB_BltjR_LO_oMX8/view?usp=sharing
// https://drive.google.com/file/d/1sV5GlTULNtEdwKXHi1UjM-riHQFAVIt9/view?usp=sharing

// https://drive.google.com/file/d/1032M4Fzj9IeH6mNkf_TBkUX3SuWdkdea/view?usp=sharing
// https://drive.google.com/file/d/1AKbbRlD3YVuDUAMCfEQk6XfEIG36ijBa/view?usp=sharing

// https://drive.google.com/file/d/1WnMqBF1qLfqVBS0vSd8CHMMWyiD5Kz53/view?usp=sharing
// https://drive.google.com/file/d/1AKbbRlD3YVuDUAMCfEQk6XfEIG36ijBa/view?usp=sharing

// https://drive.google.com/file/d/1uwbehp3_aRp69lwxIEVHimV09LihoW78/view?usp=sharing
// https://drive.google.com/file/d/1sV5GlTULNtEdwKXHi1UjM-riHQFAVIt9/view?usp=sharing

// https://drive.google.com/file/d/1fWv84ky2CxI3sNMgFs-JHGTyRj2hqFJB/view?usp=sharing
// https://drive.google.com/file/d/1dhK9fYrfNoPOld0Hz66xMDRXKXVe0dmf/view?usp=sharing



// progressBarCenter.onmousedown = (event) => {
//   event.preventDefault();
//   let shiftX = event.clientX - progressBarCenter.getBoundingClientRect().left;
//   let newLeft;
//   const onMouseMove = (event) => {
//     newLeft = event.clientX - shiftX - progressBar.getBoundingClientRect().left;

//     if (newLeft < -9) {
//       newLeft = -9;
//     }
//     let rightEdge = progressBar.offsetWidth - progressBarCenter.offsetWidth;
//     if (newLeft > rightEdge + 9) {
//       newLeft = rightEdge + 9;
//     }
//     progressBarCenter.style.left = newLeft + "px";
//     updateProgressBar(newLeft + 9);
//   };

//   const onMouseUp = () => {
//     document.removeEventListener("mouseup", onMouseUp);
//     document.removeEventListener("mousemove", onMouseMove);
//     updateProgressBar(newLeft + 9);
//   };

//   document.addEventListener("mousemove", onMouseMove);
//   document.addEventListener("mouseup", onMouseUp);
// };
