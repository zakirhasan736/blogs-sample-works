"use client";
import { useEffect } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import "@/styles/css/color-modal.css";
import ColorCraftFaq from "./ColorCraftFaq";
const ColorCraft = () => {
  useEffect(() => {
    const primaryColour = document.getElementById("prim");
    const secondaryColour = document.getElementById("sec");
    const primbuttnColour = document.getElementById("primbuttn");
    const secbuttnColour = document.getElementById("secbuttn");
    const accentColour = document.getElementById("accent");
    const randomizeButton = document.getElementById("randomize");

    // Random colour sets

    const colorSets = [
      {
        colors: ["#e9c46a", "#264653", "#e76f51", "#2a9d8f", "#e9c46a"],
      },

      {
        colors: ["#223d49", "#ffe08a", "#ac5039", "#fff0c7", "#2a9d8f"],
      },

      {
        colors: ["#f6f7f9", "#212428", "#00ff00", "#313130", "#00bb00"],
      },

      {
        colors: ["#0e101a", "#ffffff", "#0d8065", "#f0f2fc", "#aff2ea"],
        source: "<b>Inspiration:</b><br>Grammarly",
      },

      {
        colors: ["#1d3557", "#f1faee", "#e63946", "#a8dadc", "#457b9d"],
      },

      {
        colors: ["#f1faee", "#1d3557", "#a8dadc", "#06446a", "#ffc7cc"],
      },

      {
        colors: ["#fffbe5", "#000814", "#ffc300", "#001d3d", "#003566"],
      },

      {
        colors: ["#344e41", "#dad7cd", "#3a5a40", "#b5c49c", "#588157"],
      },

      {
        colors: ["#2b2d42", "#edf2f4", "#d90429", "#8d99ae", "#201f33"],
      },

      {
        colors: ["#212529", "#f8f9fa", "#343a40", "#e9ecef", "#adb5bd"],
      },

      {
        colors: ["#231942", "#ffebf5", "#5e548e", "#efd9f2", "#8d73b0"],
      },

      {
        colors: ["#ffffff", "#191919", "#405bff", "#212121", "#ebff38"],
        source: "<b>Inspiration:</b><br>LaunchDarkly",
      },

      {
        colors: ["#eeeeee", "#000000", "#44d62c", "#222222", "#ff9c07"],
      },

      {
        colors: ["#eeeeee", "#000000", "#44d62c", "#222222", "#44d62c"],
        source: "<b>Inspiration:</b><br>Razer",
      },

      {
        colors: ["#ff8bff", "#193718", "#ff8bff", "#5eaa67", "#e9ffe8"],
        source: "<b>Inspiration:</b><br>OpenAI ChatGPT",
      },

      {
        colors: ["#000000", "#ffffff", "#000000", "#f2f2f2", "#000000"],
      },

      {
        colors: ["#000000", "#ffffff", "#0049db", "#f2f2f2", "#ff6bc1"],
      },

      {
        colors: ["#0f1419", "#ffffff", "#1d9bf0", "#f7f7f7", "#8ecdf7"],
        source: "<b>Inspiration:</b><br>Twitter",
      },

      {
        colors: ["#0f1419", "#ffffff", "#ffd400", "#f2f2f2", "#ffe97f"],
      },

      {
        colors: ["#fbf5d4", "#0099ab", "#5a39d0", "#006374", "#2156c0"],
        source: "<b>Inspiration:</b><br>Retro 80s Nike Jacket",
      },

      {
        colors: ["#000000", "#e7e7d7", "#006338", "#deded0", "#006338"],
        source: "<b>Inspiration:</b><br>Retro 80s Nike Jacket",
      },

      {
        colors: ["#0f1419", "#ffffff", "#f91880", "#f2f2f2", "#fc8bbf"],
      },

      {
        colors: ["#0f1419", "#ffffff", "#8756FF", "#f2f2f2", "#bbaaff"],
      },

      {
        colors: ["#0f1419", "#ffffff", "#ff7a00", "#f2f2f2", "#ffbc7f"],
      },

      {
        colors: ["#0f1419", "#ffffff", "#00ba7c", "#f2f2f2", "#7fdcbd"],
      },

      {
        colors: ["#006374", "#fbf5d4", "#5a39d0", "#cbddca", "#5a39d0"],
      },

      {
        colors: ["#0e101a", "#ffffff", "#ff686b", "#fff6f5", "#84dcc6"],
      },

      {
        colors: ["#584b53", "#fef5ef", "#9d5c63", "#ffffff", "#e4bb97"],
      },

      {
        colors: ["#424b54", "#ffffff", "#9b6a6c", "#e6eaeb", "#e2b4bd"],
      },

      {
        colors: ["#ffffff", "#1f2041", "#ffc857", "#4b3f72", "#ffc857"],
      },

      {
        colors: ["#050505", "#ffffff", "#121212", "#f6f5f4", "#ffb600"],
        source: "<b>Inspiration:</b><br>Notion",
      },

      {
        colors: ["#ffffff", "#000000", "#9d34da", "#1a1a1a", "#bd73e8"],
        source: "<b>Inspiration:</b><br>Notion AI",
      },

      {
        colors: ["#2b1c50", "#ffffff", "#565add", "#d1d1f7", "#9f92ec"],
        source: "<b>Inspiration:</b><br>Loom",
      },

      {
        colors: ["#00031f", "#ffffff", "#0b5cff", "#ffffff", "#00ede7"],
        source: "<b>Inspiration:</b><br>Zoom",
      },

      {
        colors: ["#000000", "#ffffff", "#611f69", "#f4ede4", "#ecb22e"],
        source: "<b>Inspiration:</b><br>Slack",
      },

      {
        colors: ["#171a22", "#ffffff", "#ff622d", "#f7f7f7", "#421983"],
        source: "<b>Inspiration:</b><br>SEMRush",
      },

      {
        colors: ["#000000", "#9de2d4", "#e27d5f", "#95d6d2", "#d3bbc2"],
      },

      {
        colors: ["#fffbff", "#252cbb", "#ca3f66", "#2e35c2", "#ffccda"],
      },

      {
        colors: ["#ffffff", "#4887b0", "#fbeec1", "#3f7897", "#fbeec1"],
      },

      {
        colors: ["#05396b", "#5cdb94", "#edf5e0", "#8de4af", "#05396b"],
      },

      {
        colors: ["#fcfcfc", "#151515", "#f54c28", "#1b1918", "#689775"],
      },

      {
        colors: ["#5d5c61", "#b4c6da", "#557a95", "#d0dce7", "#7a747b"],
      },

      {
        colors: ["#2e1115", "#ffffff", "#4f1b1d", "#eaeff2", "#83687b"],
      },

      {
        colors: ["#fcfcfc", "#000000", "#4201ff", "#171717", "#230090"],
      },

      {
        colors: ["#e5fffd", "#0b0c12", "#66fcf1", "#202833", "#c5c6c8"],
      },

      {
        colors: ["#2c221e", "#e3e2de", "#e10243", "#e5d1d6", "#9b1750"],
      },

      {
        colors: ["#6c6b66", "#f1f0eb", "#f13c1f", "#fff8e5", "#4056a1"],
      },

      {
        colors: ["#d6d6d6", "#272727", "#10f49c", "#424242", "#ffe401"],
      },

      {
        colors: ["#fdfffe", "#2f4455", "#da7b93", "#376f70", "#2e151b"],
      },

      {
        colors: ["#646561", "#eae8dc", "#e85a50", "#e6e2cc", "#977d59"],
      },

      {
        colors: ["#ededed", "#222546", "#29658a", "#474866", "#d1d2d6"],
      },
    ];

    // Randomization

    let lastSelectedColorSet = null;

    randomizeButton.addEventListener("click", () => {
      removeColorSource();
      randomizeColors();
      updateSlug();
    });

    document.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        removeColorSource();
        randomizeColors();
        updateSlug();
        event.preventDefault();
      }
    });

    primaryColor.addEventListener("input", removeColorSource);
    secondaryColor.addEventListener("input", removeColorSource);
    primbuttnColor.addEventListener("input", removeColorSource);
    secbuttnColor.addEventListener("input", removeColorSource);
    accentColor.addEventListener("input", removeColorSource);

    function removeColorSource() {
      const sourceDiv = document.querySelector(".color-source");
      if (sourceDiv) {
        sourceDiv.remove();
      }
    }

    function randomizeColors() {
      let randomColorSet;

      do {
        randomColorSet =
          colorSets[Math.floor(Math.random() * colorSets.length)];
      } while (randomColorSet === lastSelectedColorSet);

      lastSelectedColorSet = randomColorSet;

      primaryColor.value = randomColorSet.colors[0];
      secondaryColor.value = randomColorSet.colors[1];
      primbuttnColor.value = randomColorSet.colors[2];
      secbuttnColor.value = randomColorSet.colors[3];
      accentColor.value = randomColorSet.colors[4];

      document.documentElement.style.setProperty(
        "--primary",
        randomColorSet.colors[0]
      );
      document.documentElement.style.setProperty(
        "--secondary",
        randomColorSet.colors[1]
      );
      document.documentElement.style.setProperty(
        "--primbuttn",
        randomColorSet.colors[2]
      );
      document.documentElement.style.setProperty(
        "--secbuttn",
        randomColorSet.colors[3]
      );
      document.documentElement.style.setProperty(
        "--accent",
        randomColorSet.colors[4]
      );

      if (randomColorSet.source) {
        const sourceDiv = document.createElement("div");
        sourceDiv.innerHTML = randomColorSet.source;
        sourceDiv.classList.add("color-source");
        document.body.appendChild(sourceDiv);
      }

      // contrast checker

      const primbuttnColorValue = primbuttnColor.value;

      primaryButtons.forEach((primaryButton) => {
        const primaryColorValue = primaryColor.value;
        const secondaryColorValue = secondaryColor.value;

        const primaryBrightness = getBrightness(primaryColorValue);
        const secondaryBrightness = getBrightness(secondaryColorValue);

        const contrastRatio = getContrastRatio(
          primbuttnColorValue,
          primaryColorValue
        );

        if (primaryBrightness < secondaryBrightness) {
          if (contrastRatio < 4.5) {
            primaryButton.style.colour = "var(--secondary)";
            primbuttnColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            primaryButton.style.colour = "var(--primary)";
            primbuttnColorClass.style.colour = "var(--primary)";
          }
        }

        if (primaryBrightness > secondaryBrightness) {
          if (contrastRatio < 4.5) {
            primaryButton.style.colour = "var(--secondary)";
            primbuttnColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            primaryButton.style.colour = "var(--primary)";
            primbuttnColorClass.style.colour = "var(--primary)";
          }
        }
      });

      const secbuttnColorValue = secbuttnColor.value;

      faqQuestions.forEach((faqQuestion) => {
        const primaryColorValue = primaryColor.value;
        const secondaryColorValue = secondaryColor.value;

        const primaryBrightness = getBrightness(primaryColorValue);
        const secondaryBrightness = getBrightness(secondaryColorValue);

        const contrastRatio = getContrastRatio(
          secbuttnColorValue,
          primaryColorValue
        );

        if (primaryBrightness < secondaryBrightness) {
          if (contrastRatio < 4.5) {
            faqQuestion.style.colour = "var(--secondary)";
            secbuttnColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            faqQuestion.style.colour = "var(--primary)";
            secbuttnColorClass.style.colour = "var(--primary)";
          }
        }

        if (primaryBrightness > secondaryBrightness) {
          if (contrastRatio < 4.5) {
            faqQuestion.style.colour = "var(--secondary)";
            secbuttnColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            faqQuestion.style.colour = "var(--primary)";
            secbuttnColorClass.style.colour = "var(--primary)";
          }
        }
      });

      secondaryButtons.forEach((secondaryButton) => {
        const primaryColorValue = primaryColor.value;
        const secondaryColorValue = secondaryColor.value;

        const primaryBrightness = getBrightness(primaryColorValue);
        const secondaryBrightness = getBrightness(secondaryColorValue);

        const contrastRatio = getContrastRatio(
          secbuttnColorValue,
          primaryColorValue
        );

        if (primaryBrightness < secondaryBrightness) {
          if (contrastRatio < 4.5) {
            secondaryButton.style.colour = "var(--secondary)";
            secbuttnColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            secondaryButton.style.colour = "var(--primary)";
            secbuttnColorClass.style.colour = "var(--primary)";
          }
        }

        if (primaryBrightness > secondaryBrightness) {
          if (contrastRatio < 4.5) {
            secondaryButton.style.colour = "var(--secondary)";
            secbuttnColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            secondaryButton.style.colour = "var(--primary)";
            secbuttnColorClass.style.colour = "var(--primary)";
          }
        }
      });

      const accentColorValue = accentColor.value;

      partTwo.forEach((partTwo) => {
        const primaryColorValue = primaryColor.value;
        const secondaryColorValue = secondaryColor.value;

        const primaryBrightness = getBrightness(primaryColorValue);
        const secondaryBrightness = getBrightness(secondaryColorValue);

        const contrastRatio = getContrastRatio(
          accentColorValue,
          primaryColorValue
        );

        if (primaryBrightness < secondaryBrightness) {
          if (contrastRatio < 4.5) {
            partTwo.style.colour = "var(--secondary)";
            accentColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            partTwo.style.colour = "var(--primary)";
            accentColorClass.style.colour = "var(--primary)";
          }
        }

        if (primaryBrightness > secondaryBrightness) {
          if (contrastRatio < 4.5) {
            partTwo.style.colour = "var(--secondary)";
            accentColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            partTwo.style.colour = "var(--primary)";
            accentColorClass.style.colour = "var(--primary)";
          }
        }
      });
    }

    // COLOuR INPUT

    primaryColor.addEventListener("input", () => {
      const primaryColorValue = primaryColor.value;
      document.documentElement.style.setProperty(
        "--primary",
        primaryColorValue
      );
    });

    secondaryColor.addEventListener("input", () => {
      const secondaryColorValue = secondaryColor.value;
      document.documentElement.style.setProperty(
        "--secondary",
        secondaryColorValue
      );
    });

    primbuttnColor.addEventListener("input", () => {
      const primbuttnColorValue = primbuttnColor.value;
      document.documentElement.style.setProperty(
        "--primbuttn",
        primbuttnColorValue
      );
    });

    secbuttnColor.addEventListener("input", () => {
      const secbuttnColorValue = secbuttnColor.value;
      document.documentElement.style.setProperty(
        "--secbuttn",
        secbuttnColorValue
      );
    });

    accentColor.addEventListener("input", () => {
      const accentColorValue = accentColor.value;
      document.documentElement.style.setProperty("--accent", accentColorValue);
    });

    primaryColor.addEventListener("input", checkContrast);
    secondaryColor.addEventListener("input", checkContrast);
    primbuttnColor.addEventListener("input", checkContrast);
    secbuttnColor.addEventListener("input", checkContrast);
    accentColor.addEventListener("input", checkContrast);

    // EXPORT

    const exportButton = document.getElementById("export");
    exportButton.addEventListener("click", () => {
      const colorValues = [
        primaryColor.value,
        secondaryColor.value,
        primbuttnColor.value,
        secbuttnColor.value,
        accentColor.value,
      ];

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = colorValues.length * 50;
      canvas.height = 50;
      for (let i = 0; i < colorValues.length; i++) {
        ctx.fillStyle = colorValues[i];
        ctx.fillRect(i * 50, 0, 50, 50);
      }

      const paletteImage = canvas.toDataURL("image/png");
      const paletteBlob = dataURItoBlob(paletteImage);
      const paletteFile = new File([paletteBlob], "palette.png", {
        type: "image/png",
      });

      const colorText = `Your selected colors:\n
    Primary: ${primaryColor.value} (RGB: ${hexToRgb(primaryColor.value)})
    Secondary: ${secondaryColor.value} (RGB: ${hexToRgb(secondaryColor.value)})
    Primary Button: ${primbuttnColor.value} (RGB: ${hexToRgb(
      primbuttnColor.value
    )})
    Secondary Button: ${secbuttnColor.value} (RGB: ${hexToRgb(
      secbuttnColor.value
    )})
    Accent: ${accentColor.value} (RGB: ${hexToRgb(accentColor.value)})\n
Thanks for using Colour Craft By particular!`;
      const colorBlob = new Blob([colorText], { type: "text/plain" });
      const colorFile = new File([colorBlob], "colours.txt", {
        type: "text/plain",
      });

      const zip = new JSZip();
      zip.file(paletteFile.name, paletteFile);
      zip.file(colorFile.name, colorFile);
      zip.generateAsync({ type: "blob" }).then(function (blob) {
        saveAs(blob, "colours.zip");
      });
    });

    function hexToRgb(hex) {
      const r = parseInt(hex.substring(1, 3), 16);
      const g = parseInt(hex.substring(3, 5), 16);
      const b = parseInt(hex.substring(5, 7), 16);
      return `${r}, ${g}, ${b}`;
    }

    function dataURItoBlob(dataURI) {
      const byteString = atob(dataURI.split(",")[1]);
      const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: mimeString });
    }

    // CONTRAST CHECKER

    function getBrightness(color) {
      let hex = color;

      if (color.substring(0, 3) === "rgb") {
        const [r, g, b] = color.match(/\d+/g);
        hex =
          "#" + ((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1);
      }

      if (hex === "#000000") return 0;
      if (hex === "#FFFFFF") return 100;

      const r = parseInt(hex.substring(1, 3), 16);
      const g = parseInt(hex.substring(3, 5), 16);
      const b = parseInt(hex.substring(5, 7), 16);

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const l = (max + min) / 2;

      return (l * 100) / 255;
    }

    function debounce(func, wait) {
      let timeout;
      return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      };
    }

    // CONTRAST CHECKING RULES

    const primaryButtons = document.querySelectorAll(".primary-button");
    const secondaryButtons = document.querySelectorAll(".secondary-button");
    const partTwo = document.querySelectorAll(".part2");
    const primbuttnColorClass = document.querySelector(".primbuttn");
    const secbuttnColorClass = document.querySelector(".secbuttn");
    const accentColorClass = document.querySelector(".accent");

    function checkContrast() {
      primbuttnColor.addEventListener(
        "input",
        debounce(() => {
          const primbuttnColorValue = primbuttnColor.value;

          primaryButtons.forEach((primaryButton) => {
            const primaryColorValue = primaryColor.value;
            const secondaryColorValue = secondaryColor.value;

            const primaryBrightness = getBrightness(primaryColorValue);
            const secondaryBrightness = getBrightness(secondaryColorValue);

            const contrastRatio = getContrastRatio(
              primbuttnColorValue,
              primaryColorValue
            );

            if (primaryBrightness < secondaryBrightness) {
              if (contrastRatio < 4.5) {
                primaryButton.style.colour = "var(--secondary)";
                primbuttnColorClass.style.colour = "var(--secondary)";
              } else if (contrastRatio > 4.5) {
                primaryButton.style.colour = "var(--primary)";
                primbuttnColorClass.style.colour = "var(--primary)";
              }
            }

            if (primaryBrightness > secondaryBrightness) {
              if (contrastRatio < 4.5) {
                primaryButton.style.colour = "var(--secondary)";
                primbuttnColorClass.style.colour = "var(--secondary)";
              } else if (contrastRatio > 4.5) {
                primaryButton.style.colour = "var(--primary)";
                primbuttnColorClass.style.colour = "var(--primary)";
              }
            }

            console.log(`${contrastRatio}`);
          });
        })
      );

      secbuttnColor.addEventListener(
        "input",
        debounce(() => {
          const secbuttnColorValue = secbuttnColor.value;

          faqQuestions.forEach((faqQuestion) => {
            const primaryColorValue = primaryColor.value;
            const secondaryColorValue = secondaryColor.value;

            const primaryBrightness = getBrightness(primaryColorValue);
            const secondaryBrightness = getBrightness(secondaryColorValue);

            const contrastRatio = getContrastRatio(
              secbuttnColorValue,
              primaryColorValue
            );

            if (primaryBrightness < secondaryBrightness) {
              if (contrastRatio < 4.5) {
                faqQuestion.style.colour = "var(--secondary)";
                secbuttnColorClass.style.colour = "var(--secondary)";
              } else if (contrastRatio > 4.5) {
                faqQuestion.style.colour = "var(--primary)";
                secbuttnColorClass.style.colour = "var(--primary)";
              }
            }

            if (primaryBrightness > secondaryBrightness) {
              if (contrastRatio < 4.5) {
                faqQuestion.style.colour = "var(--secondary)";
                secbuttnColorClass.style.colour = "var(--secondary)";
              } else if (contrastRatio > 4.5) {
                faqQuestion.style.colour = "var(--primary)";
                secbuttnColorClass.style.colour = "var(--primary)";
              }
            }
          });
        })
      );

      secbuttnColor.addEventListener(
        "input",
        debounce(() => {
          const secbuttnColorValue = secbuttnColor.value;

          secondaryButtons.forEach((secondaryButton) => {
            const primaryColorValue = primaryColor.value;
            const secondaryColorValue = secondaryColor.value;

            const primaryBrightness = getBrightness(primaryColorValue);
            const secondaryBrightness = getBrightness(secondaryColorValue);

            const contrastRatio = getContrastRatio(
              secbuttnColorValue,
              primaryColorValue
            );

            if (primaryBrightness < secondaryBrightness) {
              if (contrastRatio < 4.5) {
                secondaryButton.style.colour = "var(--secondary)";
                secbuttnColorClass.style.colour = "var(--secondary)";
              } else if (contrastRatio > 4.5) {
                secondaryButton.style.colour = "var(--primary)";
                secbuttnColorClass.style.colour = "var(--primary)";
              }
            }

            if (primaryBrightness > secondaryBrightness) {
              if (contrastRatio < 4.5) {
                secondaryButton.style.colour = "var(--secondary)";
                secbuttnColorClass.style.colour = "var(--secondary)";
              } else if (contrastRatio > 4.5) {
                secondaryButton.style.colour = "var(--primary)";
                secbuttnColorClass.style.colour = "var(--primary)";
              }
            }
          });
        })
      );

      accentColor.addEventListener(
        "input",
        debounce(() => {
          const accentColorValue = accentColor.value;

          partTwo.forEach((partTwo) => {
            const primaryColorValue = primaryColor.value;
            const secondaryColorValue = secondaryColor.value;

            const primaryBrightness = getBrightness(primaryColorValue);
            const secondaryBrightness = getBrightness(secondaryColorValue);

            const contrastRatio = getContrastRatio(
              accentColorValue,
              primaryColorValue
            );

            if (primaryBrightness < secondaryBrightness) {
              if (contrastRatio < 4.5) {
                partTwo.style.colour = "var(--secondary)";
                accentColorClass.style.colour = "var(--secondary)";
              } else if (contrastRatio > 4.5) {
                partTwo.style.colour = "var(--primary)";
                accentColorClass.style.colour = "var(--primary)";
              }
            }

            if (primaryBrightness > secondaryBrightness) {
              if (contrastRatio < 4.5) {
                partTwo.style.colour = "var(--secondary)";
                accentColorClass.style.colour = "var(--secondary)";
              } else if (contrastRatio > 4.5) {
                partTwo.style.colour = "var(--primary)";
                accentColorClass.style.colour = "var(--primary)";
              }
            }
          });
        })
      );
    }

    // CONTRAST CHECKING FUNCTION

    function getContrastRatio(background, foreground) {
      const bg = parseColor(background);
      const fg = parseColor(foreground);

      const l1 = getLuminance(bg);
      const l2 = getLuminance(fg);

      if (l1 > l2) {
        return (l1 + 0.05) / (l2 + 0.05);
      } else {
        return (l2 + 0.05) / (l1 + 0.05);
      }
    }

    function parseColor(color) {
      const regexRgb = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
      const matchRgb = regexRgb.exec(color);
      if (matchRgb) {
        return {
          r: parseInt(matchRgb[1]),
          g: parseInt(matchRgb[2]),
          b: parseInt(matchRgb[3]),
        };
      }

      const regexHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      const matchHex = regexHex.exec(color);
      if (matchHex) {
        const hex = matchHex[1];
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return {
          r,
          g,
          b,
        };
      }

      throw new Error("Invalid colour value: " + color);
    }

    function getLuminance(color) {
      const r = color.r / 255;
      const g = color.g / 255;
      const b = color.b / 255;
      const luminance =
        0.2126 * Math.pow(r, 2.2) +
        0.7152 * Math.pow(g, 2.2) +
        0.0722 * Math.pow(b, 2.2);
      return luminance;
    }

    // FAQ

    const faqQuestions = document.querySelectorAll(".faq");
    const faqAnswers = document.querySelectorAll(".faq-a");
    const faqIcons = document.querySelectorAll(".faq-icon");

    faqQuestions.forEach((faqQuestion, index) => {
      faqQuestion.addEventListener("click", () => {
        faqIcons[index].classList.toggle("expand");
        faqAnswers[index].classList.toggle("expand");
      });
    });

    function highlightToolbar() {
      var toolbar = document.getElementById("toolbar");
      toolbar.classList.add("highlighted");
      setTimeout(function () {
        toolbar.classList.remove("highlighted");
      }, 1000);
    }

    // TIP
    const tipBar = document.getElementById("tip-bar");
    const closeBtn = document.getElementById("close-btn");
    const randomizeBtn = document.getElementById("randomize");

    function showTipBar() {
      tipBar.classList.add("show");
    }

    function hideTipBar() {
      tipBar.classList.remove("show");
    }

    closeBtn.addEventListener("click", hideTipBar);

    randomizeBtn.addEventListener("click", function (event) {
      if (!localStorage.getItem("tipShown")) {
        setTimeout(showTipBar, 2000);
        localStorage.setItem("tipShown", true);
      }
    });

    if (localStorage.getItem("tipShown")) {
      tipBar.style.display = "none";
    }

    // SLUG update based on selected colors

    function updateSlug() {
      const primaryColorValue = primaryColor.value;
      const secondaryColorValue = secondaryColor.value;
      const primbuttnColorValue = primbuttnColor.value;
      const secbuttnColorValue = secbuttnColor.value;
      const accentColorValue = accentColor.value;

      const primary = primaryColorValue
        ? encodeURIComponent(primaryColorValue.replace("#", ""))
        : "";
      const secondary = secondaryColorValue
        ? encodeURIComponent(secondaryColorValue.replace("#", ""))
        : "";
      const primbuttn = primbuttnColorValue
        ? encodeURIComponent(primbuttnColorValue.replace("#", ""))
        : "";
      const secbuttn = secbuttnColorValue
        ? encodeURIComponent(secbuttnColorValue.replace("#", ""))
        : "";
      const accent = accentColorValue
        ? encodeURIComponent(accentColorValue.replace("#", ""))
        : "";

      const slug = `${primary}-${secondary}-${primbuttn}-${secbuttn}-${accent}`;

      window.history.replaceState({}, document.title, `?colors=${slug}`);
    }

    function applyColorsFromSlug() {
      const searchParams = new URLSearchParams(window.location.search);
      const slug = searchParams.get("colors");

      if (slug) {
        const [primary, secondary, primbuttn, secbuttn, accent] =
          slug.split("-");

        primaryColor.value = `#${decodeURIComponent(primary)}`;
        secondaryColor.value = `#${decodeURIComponent(secondary)}`;
        primbuttnColor.value = `#${decodeURIComponent(primbuttn)}`;
        secbuttnColor.value = `#${decodeURIComponent(secbuttn)}`;
        accentColor.value = `#${decodeURIComponent(accent)}`;

        document.documentElement.style.setProperty(
          "--primary",
          primaryColor.value
        );
        document.documentElement.style.setProperty(
          "--secondary",
          secondaryColor.value
        );
        document.documentElement.style.setProperty(
          "--primbuttn",
          primbuttnColor.value
        );
        document.documentElement.style.setProperty(
          "--secbuttn",
          secbuttnColor.value
        );
        document.documentElement.style.setProperty(
          "--accent",
          accentColor.value
        );
      } else {
        const primaryColorValue = primaryColor.value;
        const secondaryColorValue = secondaryColor.value;
        const primbuttnColorValue = primbuttnColor.value;
        const secbuttnColorValue = secbuttnColor.value;
        const accentColorValue = accentColor.value;

        const defaultSlug = `${encodeURIComponent(
          primaryColorValue.replace("#", "")
        )}-${encodeURIComponent(
          secondaryColorValue.replace("#", "")
        )}-${encodeURIComponent(
          primbuttnColorValue.replace("#", "")
        )}-${encodeURIComponent(
          secbuttnColorValue.replace("#", "")
        )}-${encodeURIComponent(accentColorValue.replace("#", ""))}`;

        window.history.replaceState(
          {},
          document.title,
          `?colors=${defaultSlug}`
        );
      }

      // contrast checker

      const primbuttnColorValue = primbuttnColor.value;

      primaryButtons.forEach((primaryButton) => {
        const primaryColorValue = primaryColor.value;
        const secondaryColorValue = secondaryColor.value;

        const primaryBrightness = getBrightness(primaryColorValue);
        const secondaryBrightness = getBrightness(secondaryColorValue);

        const contrastRatio = getContrastRatio(
          primbuttnColorValue,
          primaryColorValue
        );

        if (primaryBrightness < secondaryBrightness) {
          if (contrastRatio < 4.5) {
            primaryButton.style.colour = "var(--secondary)";
            primbuttnColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            primaryButton.style.colour = "var(--primary)";
            primbuttnColorClass.style.colour = "var(--primary)";
          }
        }

        if (primaryBrightness > secondaryBrightness) {
          if (contrastRatio < 4.5) {
            primaryButton.style.colour = "var(--secondary)";
            primbuttnColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            primaryButton.style.colour = "var(--primary)";
            primbuttnColorClass.style.colour = "var(--primary)";
          }
        }
      });

      const secbuttnColorValue = secbuttnColor.value;

      faqQuestions.forEach((faqQuestion) => {
        const primaryColorValue = primaryColor.value;
        const secondaryColorValue = secondaryColor.value;

        const primaryBrightness = getBrightness(primaryColorValue);
        const secondaryBrightness = getBrightness(secondaryColorValue);

        const contrastRatio = getContrastRatio(
          secbuttnColorValue,
          primaryColorValue
        );

        if (primaryBrightness < secondaryBrightness) {
          if (contrastRatio < 4.5) {
            faqQuestion.style.colour = "var(--secondary)";
            secbuttnColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            faqQuestion.style.colour = "var(--primary)";
            secbuttnColorClass.style.colour = "var(--primary)";
          }
        }

        if (primaryBrightness > secondaryBrightness) {
          if (contrastRatio < 4.5) {
            faqQuestion.style.colour = "var(--secondary)";
            secbuttnColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            faqQuestion.style.colour = "var(--primary)";
            secbuttnColorClass.style.colour = "var(--primary)";
          }
        }
      });

      secondaryButtons.forEach((secondaryButton) => {
        const primaryColorValue = primaryColor.value;
        const secondaryColorValue = secondaryColor.value;

        const primaryBrightness = getBrightness(primaryColorValue);
        const secondaryBrightness = getBrightness(secondaryColorValue);

        const contrastRatio = getContrastRatio(
          secbuttnColorValue,
          primaryColorValue
        );

        if (primaryBrightness < secondaryBrightness) {
          if (contrastRatio < 4.5) {
            secondaryButton.style.colour = "var(--secondary)";
            secbuttnColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            secondaryButton.style.colour = "var(--primary)";
            secbuttnColorClass.style.colour = "var(--primary)";
          }
        }

        if (primaryBrightness > secondaryBrightness) {
          if (contrastRatio < 4.5) {
            secondaryButton.style.colour = "var(--secondary)";
            secbuttnColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            secondaryButton.style.colour = "var(--primary)";
            secbuttnColorClass.style.colour = "var(--primary)";
          }
        }
      });

      const accentColorValue = accentColor.value;

      partTwo.forEach((partTwo) => {
        const primaryColorValue = primaryColor.value;
        const secondaryColorValue = secondaryColor.value;

        const primaryBrightness = getBrightness(primaryColorValue);
        const secondaryBrightness = getBrightness(secondaryColorValue);

        const contrastRatio = getContrastRatio(
          accentColorValue,
          primaryColorValue
        );

        if (primaryBrightness < secondaryBrightness) {
          if (contrastRatio < 4.5) {
            partTwo.style.colour = "var(--secondary)";
            accentColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            partTwo.style.colour = "var(--primary)";
            accentColorClass.style.colour = "var(--primary)";
          }
        }

        if (primaryBrightness > secondaryBrightness) {
          if (contrastRatio < 4.5) {
            partTwo.style.colour = "var(--secondary)";
            accentColorClass.style.colour = "var(--secondary)";
          } else if (contrastRatio > 4.5) {
            partTwo.style.colour = "var(--primary)";
            accentColorClass.style.colour = "var(--primary)";
          }
        }
      });

      updateColors();
    }

    applyColorsFromSlug();

    primaryColor.addEventListener("change", updateSlug);
    secondaryColor.addEventListener("change", updateSlug);
    primbuttnColor.addEventListener("change", updateSlug);
    secbuttnColor.addEventListener("change", updateSlug);
    accentColor.addEventListener("change", updateSlug);

    function updateColors() {
      const primaryColorValue = primaryColor.value.replace(/#|%23/g, "");
      const secondaryColorValue = secondaryColor.value.replace(/#|%23/g, "");
      const primbuttnColorValue = primbuttnColor.value.replace(/#|%23/g, "");
      const secbuttnColorValue = secbuttnColor.value.replace(/#|%23/g, "");
      const accentColorValue = accentColor.value.replace(/#|%23/g, "");

      const slug = `${primaryColorValue}-${secondaryColorValue}-${primbuttnColorValue}-${secbuttnColorValue}-${accentColorValue}`;

      window.history.replaceState({}, document.title, `?colors=${slug}`);

      document.documentElement.style.setProperty(
        "--secondary",
        `#${primaryColorValue}`
      );
      document.documentElement.style.setProperty(
        "--primary",
        `#${secondaryColorValue}`
      );
      document.documentElement.style.setProperty(
        "--primbuttn",
        `#${primbuttnColorValue}`
      );
      document.documentElement.style.setProperty(
        "--secbuttn",
        `#${secbuttnColorValue}`
      );
      document.documentElement.style.setProperty(
        "--accent",
        `#${accentColorValue}`
      );
    }

    primaryColor.addEventListener("change", updateColors);
    secondaryColor.addEventListener("change", updateColors);
    primbuttnColor.addEventListener("change", updateColors);
    secbuttnColor.addEventListener("change", updateColors);
    accentColor.addEventListener("change", updateColors);
  }, []);

  useEffect(() => {
    const expandButton = document.getElementById("rolloutbutton");
    const options = document.querySelectorAll(".toolbar .option");

    if (expandButton) {
      const handleClick = () => {
        expandButton.classList.toggle("rotate");
        options.forEach((option) => {
          option.classList.toggle("rollout");
        });
      };

      expandButton.addEventListener("click", handleClick);

      return () => {
        expandButton.removeEventListener("click", handleClick);
      };
    }
  }, []);

  useEffect(() => {
    document.body.classList.add("color-craft-page");

    // Remove the specific body class when the component unmounts
    return () => {
      document.body.classList.remove("color-craft-page");
    };
  }, []);

  return (
    <>
      <div className="color-craft-modal">
        <div className="custom-container overflow-hidden color-craft-banner-section max-w-[1430px] pt-20 pb-[148px] lg:pt-14 lg:pb-[80px] sm:pb-[100px] sm:pt-16">
          <div className="hero mt-20">
            <div className="hero-text">
              <h1 className="text-[65px] text-left font-primary font-medium leading-[1.2] capitalize mb-[50px] sm:mb-7">
                Visualise Your <span className="color-effect">Colours</span>
                <br />
                On a Real Website
              </h1>
              <p className="subtitle text-[26px] text-left font-primary font-medium leading-[1.3] max-w-[660px]">
                Choosing a colour palette for your website?{" "}
                <br className="sm:hidden" /> Use the Toolbar below to realize
                your choices.
              </p>
              <div className="hero-cta gap-14 mt-[120px] lg:mt-16 md:mt-10 md:gap-5">
                <a
                  href="#toolbar"
                  onclick="highlightToolbar()"
                  className="primary-button"
                >
                  Get Started
                </a>
                <a href="#how" className="secondary-button text-black">
                  How does it work?
                </a>
              </div>
            </div>
            <div className="hero-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="652"
                height="644"
                viewBox="0 0 652 644"
                fill="none"
                className="mondrian"
              >
                <rect
                  x="4.69366"
                  y="4"
                  width="643.306"
                  height="636"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="5"
                  y="4"
                  width="154.827"
                  height="70.282"
                  fill="var(--secbuttn)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="411"
                  y="4"
                  width="202"
                  height="67"
                  fill="var(--accent)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="411"
                  y="72"
                  width="202"
                  height="167"
                  fill="var(--accent)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="411"
                  y="405"
                  width="202"
                  height="84"
                  fill="var(--secondary)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="241"
                  y="615"
                  width="372"
                  height="25"
                  fill="var(--secondary)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="76"
                  y="569"
                  width="166"
                  height="71"
                  fill="var(--secondary)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="242"
                  y="570"
                  width="169"
                  height="45"
                  fill="var(--primary)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="242"
                  y="489"
                  width="169"
                  height="81"
                  fill="var(--secbuttn)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="242"
                  y="404"
                  width="169"
                  height="85"
                  fill="var(--secbuttn)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="75"
                  y="72"
                  width="336"
                  height="333"
                  fill="var(--primbuttn)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="76"
                  y="405"
                  width="166"
                  height="165"
                  fill="var(--primary)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  opacity="0.5"
                  x="411"
                  y="489"
                  width="202"
                  height="126"
                  fill="var(--accent)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="613"
                  y="489"
                  width="35"
                  height="151"
                  fill="var(--primbuttn)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="411"
                  y="238"
                  width="103"
                  height="167"
                  fill="var(--secondary)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="514"
                  y="238"
                  width="99"
                  height="167"
                  fill="var(--secondary)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="613.206"
                  y="4"
                  width="34.7942"
                  height="484.655"
                  fill="var(--secondary)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="159.827"
                  y="4"
                  width="250.853"
                  height="67.1507"
                  fill="var(--secondary)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="5"
                  y="72"
                  width="71"
                  height="167"
                  fill="var(--secondary)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="5"
                  y="238"
                  width="71"
                  height="251"
                  fill="var(--secbuttn)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
                <rect
                  x="4.69366"
                  y="487.261"
                  width="71.3258"
                  height="152.739"
                  fill="var(--accent)"
                  stroke="var(--secondary)"
                  stroke-width="8"
                />
              </svg>
            </div>
          </div>
        </div>

        <main className="overflow-hidden laptop-x:gap-20 laptop-m:gap-16 lg:gap-16">
          <div className="custom-container our-activities-section max-w-[1430px] pb-[100px] sm:pb-16">
            <div className="part1" id="why">
              <h2 className="text-[48px] font-bold text-center font-primary leading-none mb-16 sm:mb-8 sm:text-[32px]">
                Why Colour Craft?
              </h2>
              <div className="part1-cards grid grid-cols-12 gap-10 lg:gap-7 sm:gap-5 sm:flex">
                <div className="part1-card px-[40px] pb-[119px] pt-12 rounded-[10px] bg-[#292929] h-[588px] sm:h-auto sm:py-16  col-span-4 md:col-span-6">
                  <svg
                    width="117"
                    height="117"
                    viewBox="0 0 117 117"
                    fill="none"
                    className="part1-card-img z-[5]"
                  >
                    <circle
                      cx="58.5"
                      cy="58.5"
                      r="58.5"
                      fill="var(--secondary)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M89.4669 8.85912L58.0465 63.9419L2.44746 41.7023C9.66585 17.5806 32.0298 0 58.5 0C69.872 0 80.4861 3.24483 89.4669 8.85912Z"
                      fill="var(--primbuttn)"
                      fill-opacity="0.6"
                    />
                    <path
                      d="M81.5 22.5L57.1395 64.8489L32 53.5"
                      stroke="var(--primary)"
                      stroke-width="7.25581"
                    />
                  </svg>
                  <h3 className="subtitle highlight text-[32px] text-center font-primary font-medium leading-none">
                    Real-Time Preview
                  </h3>
                  <p className="text-[16px] text-center font-primary font-medium leading-normal mt-[52px] sm:mt-[32px] max-w-[386px] mx-auto">
                    Colour Craft lets you see instant previews of your website
                    as you customise its colours, so you can make adjustments in
                    real-time and refine the palette to your satisfaction before
                    publishing.
                  </p>
                  <div className="part1-card-bg"></div>
                </div>

                <div className="part1-card px-[40px] pb-[119px] pt-12 rounded-[10px] bg-[#292929] h-[588px] sm:h-auto sm:py-16  col-span-4 md:col-span-6">
                  <svg
                    width="112"
                    height="114"
                    viewBox="0 0 112 114"
                    fill="none"
                    className="part1-card-img z-[5]"
                  >
                    <rect width="58" height="58" fill="var(--secondary)" />
                    <rect
                      x="69"
                      y="25"
                      width="33"
                      height="33"
                      fill="var(--primbuttn)"
                      fill-opacity="0.6"
                    />
                    <rect
                      x="69"
                      y="71"
                      width="43"
                      height="43"
                      fill="var(--primary)"
                      fill-opacity="0.2"
                    />
                    <rect
                      x="20"
                      y="70"
                      width="38"
                      height="39"
                      fill="var(--primary)"
                    />
                  </svg>
                  <h3 className="subtitle highlight text-[32px] text-center font-primary font-medium leading-none">
                    Informed Decision-Making
                  </h3>
                  <p className="text-[16px] text-center font-primary font-medium leading-normal mt-[52px] sm:mt-[32px] max-w-[386px] mx-auto">
                    By previewing different colour combinations, you can
                    experiment and identify the one that best suits your brand,
                    providing confidence that your final selection will work
                    well with your content.
                  </p>
                  <div className="part1-card-bg"></div>
                </div>

                <div className="part1-card px-[40px] pb-[119px] pt-12 rounded-[10px] bg-[#292929] h-[588px] sm:h-auto sm:py-16 col-span-4 md:col-span-6">
                  <svg
                    width="179"
                    height="89"
                    viewBox="0 0 179 89"
                    fill="none"
                    className="part1-card-img  z-[5]"
                  >
                    <rect
                      y="26"
                      width="154"
                      height="63"
                      fill="var(--primbuttn)"
                      fill-opacity="0.6"
                    />
                    <path
                      d="M142 15.5V0"
                      stroke="var(--primary)"
                      stroke-width="8"
                    />
                    <path
                      d="M163 34L178.5 34"
                      stroke="var(--primary)"
                      stroke-width="8"
                    />
                    <path
                      d="M158 19.5L170.5 7"
                      stroke="var(--primary)"
                      stroke-width="8"
                    />
                    <path
                      d="M63 54L74.5 65L95.5 44"
                      stroke="var(--primary)"
                      stroke-width="8"
                    />
                  </svg>
                  <h3 className="subtitle highlight text-[32px] text-center font-primary font-medium leading-none">
                    Reduced Rework
                  </h3>
                  <p className="text-[16px] text-center font-primary font-medium leading-normal mt-[52px] sm:mt-[32px] max-w-[386px] mx-auto">
                    The live preview reduces the need for trial-and-error after
                    the fact, preventing frustrating rework and ensuring your
                    design is set from the outset. This way you can reduce any
                    need for change.
                  </p>
                  <div className="part1-card-bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-container how-it-works-sectiob max-w-[1430px] pb-[100px] sm:pb-16">
            <div
              className="part2 grid grid-cols-16 gap-20 lg:gap-12 md:gap-6 sm:flex"
              id="how"
            >
              <div className="part2-left col-span-6 sm:col-span-full sm:mb-7">
                <h2 className="text-[48px] text-left sm:text-center text-primary font-primary font-bold leading-none sm:text-[32px]">
                  How Does it Work?
                </h2>
                <p className="text-primary text-[26px] text-left sm:text-center max-w-[566px] font-primary font-normal leading-normal mt-[56px] sm:mt-[26px]">
                  Colour Craft allows you to customise and experiment with your
                  website's colour scheme to give you a feel of how the colours
                  come together . Whether you're looking for a vibrant,
                  energetic look or a calm, soothing palette, we provide the
                  tools to create your ideal aesthetic with just a few clicks.
                </p>
              </div>
              <div className="part2-right col-span-10 grid grid-cols-12 sm:flex sm:flex-col sm:pl-6 lg:gap-8 gap-12 sm:col-span-full">
                <p className="one step pl-4 col-span-6 text-primary text-[22px] font-normal font-primary text-left leading-normal sm:text-[14px]">
                  First choose your background colour. This forms the foundation
                  of your site’s visual structure.
                </p>
                <p className="two step pl-4 col-span-6 text-primary text-[22px] font-normal font-primary text-left leading-normal sm:text-[14px]">
                  Then, choose a primary colour that aligns with your brand or
                  mood. This colour will be the dominant hue throughout your
                  website.
                </p>
                <p className="three step pl-4 col-span-6 text-primary text-[22px] font-normal font-primary text-left leading-normal sm:text-[14px]">
                  Refine your colour scheme by selecting complementary secondary
                  and accent colours. Our palette tool helps you preview how
                  different combinations will look.
                </p>
                <p className="four step pl-4 col-span-6 text-primary text-[22px] font-normal font-primary text-left leading-normal sm:text-[14px]">
                  Once satisfied, instantly preview the changes live, export and
                  send us over the files to give us an idea of what you’re
                  looking for.
                </p>
              </div>
            </div>
          </div>
          <div className="custom-container priching-section max-w-[1150px] pb-[100px] sm:pb-16">
            <div className="part3" id="sub">
              <div className="part3-cards grid grid-cols-12 gap-5 sm:flex lg:gap-5 sm:gap-5">
                <div className="part3-card sm:col-span-full col-span-4 md:col-span-6 bg-[#5A5A5A]  min-h-[571px] md:min-h-[450px]">
                  <div className="part3-card-text w-full">
                    <div className="promo invisible">
                      <p className="sub promo-text">None</p>
                    </div>
                    <h2 className="text-[30px] font-bold text-center font-primary leading-none">
                      Basic
                    </h2>
                    <p className="text-[26px] font-normal text-center font-primary leading-none mt-6">
                      Free
                    </p>
                    <div className="part3-list mt-5">
                      <div className="list max-w-[200px] mx-auto  py-3">
                        <svg
                          className="w-[24px] flex-[24px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19.78 2.2002L24 6.4202L8.44 22.0002L0 13.5502L4.22 9.3302L8.44 13.5502L19.78 2.2002ZM19.78 5.0002L8.44 16.3602L4.22 12.1902L2.81 13.5502L8.44 19.1702L21.19 6.4202L19.78 5.0002Z"
                            fill="black"
                          />
                        </svg>
                        <p className="text-[18px] font-normal text-center font-primary leading-none">
                          Choose any color
                        </p>
                      </div>
                      <div className="list max-w-[200px] mx-auto   py-3">
                        <svg
                          className="w-[24px] flex-[24px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19.78 2.2002L24 6.4202L8.44 22.0002L0 13.5502L4.22 9.3302L8.44 13.5502L19.78 2.2002ZM19.78 5.0002L8.44 16.3602L4.22 12.1902L2.81 13.5502L8.44 19.1702L21.19 6.4202L19.78 5.0002Z"
                            fill="black"
                          />
                        </svg>
                        <p className="text-[18px] font-normal text-center font-primary leading-none">
                          Export all you want
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="part3-bg"></div>
                </div>

                <div className="part3-card sm:col-span-full col-span-4 md:col-span-6 bg-[#F2EFEF]  min-h-[571px] md:min-h-[450px]">
                  <div className="part3-card-text w-full">
                    <div className="promo invisible">
                      <p className="sub promo-text">None</p>
                    </div>
                    <h2 className="text-[30px] font-bold text-center font-primary leading-none text-secondary mb-6">
                      *Most Popular*
                    </h2>
                    <h2 className="text-[30px] font-bold text-center font-primary leading-none text-black">
                      Pro
                    </h2>
                    <p className="text-[26px] font-normal text-center font-primary leading-none mt-6 text-black">
                      £0.00 p/m
                    </p>
                    <div className="part3-list mt-5">
                      <div className="list max-w-[200px] mx-auto  py-3">
                        <svg
                          className="w-[24px] flex-[24px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19.78 2.2002L24 6.4202L8.44 22.0002L0 13.5502L4.22 9.3302L8.44 13.5502L19.78 2.2002ZM19.78 5.0002L8.44 16.3602L4.22 12.1902L2.81 13.5502L8.44 19.1702L21.19 6.4202L19.78 5.0002Z"
                            fill="black"
                          />
                        </svg>
                        <p className="text-[18px] font-normal text-center font-primary leading-none text-black">
                          Choose any color
                        </p>
                      </div>
                      <div className="list max-w-[200px] mx-auto   py-3">
                        <svg
                          className="w-[24px] flex-[24px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19.78 2.2002L24 6.4202L8.44 22.0002L0 13.5502L4.22 9.3302L8.44 13.5502L19.78 2.2002ZM19.78 5.0002L8.44 16.3602L4.22 12.1902L2.81 13.5502L8.44 19.1702L21.19 6.4202L19.78 5.0002Z"
                            fill="black"
                          />
                        </svg>
                        <p className="text-[18px] font-normal text-center font-primary leading-none text-black">
                          Export all you want
                        </p>
                      </div>
                      <div className="list max-w-[200px] mx-auto   py-3">
                        <svg
                          className="w-[24px] flex-[24px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19.78 2.2002L24 6.4202L8.44 22.0002L0 13.5502L4.22 9.3302L8.44 13.5502L19.78 2.2002ZM19.78 5.0002L8.44 16.3602L4.22 12.1902L2.81 13.5502L8.44 19.1702L21.19 6.4202L19.78 5.0002Z"
                            fill="black"
                          />
                        </svg>
                        <p className="text-[18px] font-normal text-center font-primary leading-none text-black">
                          Get a big thank you for checking this site out
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="part3-bg"></div>
                </div>

                <div className="part3-card sm:col-span-full col-span-4 md:col-span-6 bg-[#5A5A5A]  min-h-[571px] md:min-h-[450px]">
                  <div className="part3-card-text w-full">
                    <div className="promo invisible">
                      <p className="sub promo-text">None</p>
                    </div>
                    <h2 className="text-[30px] font-bold text-center font-primary leading-none">
                      Enterprise
                    </h2>
                    <p className="text-[26px] font-normal text-center font-primary leading-none mt-6">
                      £0.00 p/m
                    </p>
                    <div className="part3-list mt-5">
                      <div className="list max-w-[200px] mx-auto  py-3">
                        <svg
                          className="w-[24px] flex-[24px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19.78 2.2002L24 6.4202L8.44 22.0002L0 13.5502L4.22 9.3302L8.44 13.5502L19.78 2.2002ZM19.78 5.0002L8.44 16.3602L4.22 12.1902L2.81 13.5502L8.44 19.1702L21.19 6.4202L19.78 5.0002Z"
                            fill="black"
                          />
                        </svg>
                        <p className="text-[18px] font-normal text-center font-primary leading-none">
                          Choose any color
                        </p>
                      </div>
                      <div className="list max-w-[200px] mx-auto   py-3">
                        <svg
                          className="w-[24px] flex-[24px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19.78 2.2002L24 6.4202L8.44 22.0002L0 13.5502L4.22 9.3302L8.44 13.5502L19.78 2.2002ZM19.78 5.0002L8.44 16.3602L4.22 12.1902L2.81 13.5502L8.44 19.1702L21.19 6.4202L19.78 5.0002Z"
                            fill="black"
                          />
                        </svg>
                        <p className="text-[18px] font-normal text-center font-primary leading-none">
                          Export all you want
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="part3-bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-container faq-accordion-section pb-[100px] sm:pb-16 max-w-[1430px]">
            <div className="part4" id="faq">
              <div className="part4-heading">
                <h2 className="font-primary font-bold text-[48px] text-center leading-none mb-16 sm:mb-10">
                  FAQ(Frequently Asked Questions)
                </h2>
              </div>
              <div className="faq-list">
                <ColorCraftFaq />
              </div>
            </div>
          </div>

          <div className="custom-container  toolbar-buttons-section absolute max-w-[1430px] mx-auto left-0 right-0 flex justify-center md:justify-end">
            <div className="toolbar" id="toolbar">
              <div className="option prim rollout">
                <input
                  type="color"
                  id="prim"
                  name="prim"
                  className="colorpicker"
                  value="#000000"
                  data-coloris
                />
                <label htmlFor="prim">Text</label>
              </div>

              <div className="option sec rollout">
                <input
                  type="color"
                  id="sec"
                  name="sec"
                  className="colorpicker"
                  value="#ffffff"
                  data-coloris
                />
                <label htmlFor="sec">Background</label>
              </div>

              <div className="option primbuttn rollout">
                <input
                  type="color"
                  id="primbuttn"
                  name="primbuttn"
                  className="colorpicker"
                  value="#4685FF"
                  data-coloris
                />
                <label htmlFor="primbuttn">Primary Button</label>
              </div>

              <div className="option secbuttn rollout">
                <input
                  type="color"
                  id="secbuttn"
                  name="secbuttn"
                  className="colorpicker"
                  value="#F2F2F2"
                  data-coloris
                />
                <label htmlFor="secbuttn" className="text-black">
                  Secondary Button
                </label>
              </div>

              <div className="option accent rollout">
                <input
                  type="color"
                  id="accent"
                  name="accent"
                  className="colorpicker"
                  value="#FFB084"
                  data-coloris
                />
                <label htmlFor="accent">Accent</label>
              </div>

              <div className="option export rollout" id="export">
                <div>Export</div>
                <svg width="29" height="27" viewBox="0 0 29 27" fill="none">
                  <path
                    d="M14.7564 16.0728V9.59255C14.7564 9.39812 14.6786 9.22199 14.5505 9.09619C14.4224 8.96809 14.2463 8.89032 14.0541 8.89032C13.8597 8.89032 13.6836 8.96809 13.5578 9.09619C13.4297 9.22428 13.3519 9.39812 13.3519 9.59255V16.0728L10.854 13.8929C10.7099 13.7671 10.5269 13.7099 10.3485 13.719C10.1678 13.7305 9.99398 13.8083 9.8636 13.9524C9.7355 14.0965 9.67832 14.2795 9.68747 14.4579C9.69891 14.6363 9.77668 14.8101 9.92078 14.9382L13.5898 18.1406C13.7247 18.2596 13.894 18.3167 14.061 18.3167C14.228 18.3167 14.395 18.2527 14.5231 18.1337L18.1898 14.9314C18.3293 14.8033 18.4071 14.6317 18.4185 14.4556C18.4299 14.2772 18.3705 14.0965 18.2424 13.9524L18.2378 13.9478C18.1097 13.806 17.9359 13.7305 17.7597 13.719H17.7575C17.579 13.7099 17.396 13.7671 17.2519 13.8952L14.7564 16.0728Z"
                    fill="var(--static2)"
                  />
                  <rect
                    x="3.17556"
                    y="3.17513"
                    width="21.591"
                    height="20.3209"
                    rx="3.17514"
                    stroke="var(--static2)"
                    stroke-width="1.27006"
                  />
                </svg>
              </div>

              <div className="option randomize rollout" id="randomize">
                <div>Randomize</div>
                <svg width="27" height="29" viewBox="0 0 27 29" fill="none">
                  <mask
                    id="path-1-outside-1_100_1631"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="27"
                    height="29"
                    fill="var(--static2)"
                  >
                    <rect fill="white" width="27" height="29" />
                    <path d="M13.4821 2C13.1083 2 12.7346 2.08375 12.4451 2.25124L3.20198 7.59792C2.62289 7.93291 2.62289 8.46261 3.20198 8.7976L12.4451 14.1443C13.0242 14.4793 13.9399 14.4793 14.5189 14.1443L23.762 8.7976C24.3411 8.46267 24.3411 7.93291 23.762 7.59798L14.5189 2.2513C14.2294 2.08369 13.8557 2 13.4821 2ZM6.38342 6.99875C6.38346 6.99875 6.3835 6.99875 6.38354 6.99875C6.8666 7.01133 7.32418 7.13085 7.66606 7.33373C8.02865 7.5489 8.23234 7.84072 8.23233 8.145C8.23232 8.44928 8.02859 8.74109 7.66598 8.95624C7.30337 9.17139 6.81157 9.29226 6.29878 9.29225C5.78598 9.29224 5.29419 9.17136 4.9316 8.9562C4.65612 8.79272 4.4703 8.58368 4.39849 8.35646C4.32668 8.12924 4.37222 7.89445 4.52916 7.68285C4.68609 7.47126 4.9471 7.29273 5.27797 7.17067C5.60884 7.04861 5.99413 6.9887 6.38336 6.99881L6.38342 6.99875ZM13.5382 7.01358C13.918 7.01692 14.2879 7.0866 14.6014 7.21391C14.915 7.34123 15.1583 7.52054 15.3012 7.72944C15.444 7.93835 15.4799 8.16759 15.4045 8.38855C15.329 8.6095 15.1455 8.81236 14.8769 8.97181C14.698 9.07996 14.4848 9.16601 14.2495 9.22498C14.0142 9.28395 13.7615 9.31468 13.5061 9.31538C13.2507 9.31608 12.9976 9.28675 12.7614 9.22908C12.5252 9.17141 12.3106 9.08654 12.13 8.97938C11.9494 8.87221 11.8063 8.74487 11.7091 8.60472C11.6119 8.46457 11.5625 8.31438 11.5637 8.16282C11.5649 8.01127 11.6166 7.86135 11.716 7.72174C11.8154 7.58212 11.9604 7.45558 12.1427 7.34941C12.3256 7.2409 12.5433 7.15526 12.783 7.09758C13.0227 7.03989 13.2794 7.01133 13.538 7.01358H13.5382ZM20.779 7.01448C20.779 7.01448 20.7791 7.01448 20.7791 7.01448C21.2622 7.02704 21.7197 7.14654 22.0616 7.34941C22.4216 7.5649 22.623 7.85621 22.6219 8.15961C22.6207 8.46301 22.4171 8.75379 22.0555 8.96832C21.6939 9.18285 21.2039 9.30365 20.6925 9.30431C20.1812 9.30496 19.6903 9.18541 19.3272 8.97181C19.0517 8.80833 18.8659 8.59928 18.7941 8.37207C18.7223 8.14486 18.7679 7.91008 18.9248 7.6985C19.0818 7.48692 19.3428 7.3084 19.6736 7.18634C20.0045 7.06429 20.3898 7.00438 20.779 7.01448ZM2.58477 9.81042C2.23666 9.80104 2 10.0728 2 10.5535V20.0957C2 20.7645 2.45806 21.5578 3.03715 21.8923L11.9279 27.0264C12.507 27.3608 12.9651 27.0964 12.9651 26.4277V16.8853C12.9651 16.2165 12.507 15.4233 11.9279 15.0888L3.03715 9.95474C2.87437 9.86064 2.72098 9.81393 2.58477 9.8103V9.81042ZM24.4152 9.81054C24.2791 9.81417 24.1258 9.86076 23.963 9.95486L15.0719 15.089C14.4928 15.4234 14.0348 16.2168 14.0348 16.8855V26.428C14.0348 27.0966 14.4928 27.3609 15.0719 27.0264L23.963 21.8925C24.5421 21.5581 25 20.7648 25 20.0961V10.5536C25 10.073 24.7634 9.80134 24.4152 9.81066V9.81054ZM10.1865 15.0502C10.3936 15.0359 10.6289 15.1009 10.8685 15.2387C11.1081 15.3764 11.3437 15.5821 11.5513 15.835C11.7589 16.0878 11.9312 16.3788 12.0509 16.6786C12.1706 16.9783 12.2333 17.2763 12.2328 17.5422C12.233 17.7412 12.198 17.9178 12.1296 18.0621C12.0613 18.2064 11.9611 18.3155 11.8346 18.3832C11.7082 18.4508 11.558 18.4757 11.3927 18.4564C11.2274 18.4371 11.0503 18.374 10.8713 18.2707C10.6924 18.1674 10.5152 18.026 10.3499 17.8544C10.1846 17.6828 10.0345 17.4846 9.90805 17.2709C9.7816 17.0572 9.68135 16.8324 9.61303 16.6092C9.54471 16.386 9.50965 16.1689 9.50986 15.9702C9.50937 15.7047 9.57162 15.48 9.69038 15.3185C9.80913 15.1571 9.98022 15.0645 10.1865 15.0502ZM20.2023 16.7848C20.2024 16.7848 20.2024 16.7848 20.2024 16.7848C20.4087 16.7992 20.5797 16.8917 20.6985 17.0532C20.8172 17.2146 20.8794 17.4393 20.879 17.7048C20.8785 18.1059 20.7349 18.5731 20.4796 19.0038C20.2243 19.4345 19.8783 19.7934 19.5175 20.0017C19.1567 20.21 18.8106 20.2507 18.5553 20.1148C18.3001 19.9789 18.1564 19.6775 18.156 19.2768C18.1555 19.0108 18.2182 18.7129 18.3379 18.4132C18.4576 18.1134 18.6299 17.8224 18.8375 17.5696C19.0452 17.3167 19.2807 17.111 19.5203 16.9732C19.76 16.8355 19.9952 16.7705 20.2023 16.7848ZM3.40934 18.5626C3.61646 18.5483 3.85172 18.6132 4.09136 18.751C4.331 18.8888 4.56653 19.0945 4.77414 19.3474C4.98176 19.6002 5.15411 19.8912 5.27378 20.191C5.39345 20.4908 5.45619 20.7887 5.45568 21.0547C5.45589 21.2536 5.42083 21.4303 5.3525 21.5746C5.28417 21.7189 5.18392 21.8279 5.05747 21.8956C4.93102 21.9633 4.78086 21.9882 4.61557 21.9689C4.45028 21.9496 4.27311 21.8865 4.09418 21.7832C3.91525 21.6799 3.73808 21.5384 3.57279 21.3668C3.4075 21.1953 3.25734 20.997 3.1309 20.7833C3.00446 20.5697 2.90421 20.3448 2.83588 20.1216C2.76756 19.8984 2.7325 19.6813 2.73272 19.4826C2.73221 19.2171 2.79446 18.9924 2.91322 18.8309C3.03197 18.6695 3.20307 18.5769 3.40934 18.5626Z" />
                  </mask>
                  <path
                    d="M13.4821 2C13.1083 2 12.7346 2.08375 12.4451 2.25124L3.20198 7.59792C2.62289 7.93291 2.62289 8.46261 3.20198 8.7976L12.4451 14.1443C13.0242 14.4793 13.9399 14.4793 14.5189 14.1443L23.762 8.7976C24.3411 8.46267 24.3411 7.93291 23.762 7.59798L14.5189 2.2513C14.2294 2.08369 13.8557 2 13.4821 2ZM6.38342 6.99875C6.38346 6.99875 6.3835 6.99875 6.38354 6.99875C6.8666 7.01133 7.32418 7.13085 7.66606 7.33373C8.02865 7.5489 8.23234 7.84072 8.23233 8.145C8.23232 8.44928 8.02859 8.74109 7.66598 8.95624C7.30337 9.17139 6.81157 9.29226 6.29878 9.29225C5.78598 9.29224 5.29419 9.17136 4.9316 8.9562C4.65612 8.79272 4.4703 8.58368 4.39849 8.35646C4.32668 8.12924 4.37222 7.89445 4.52916 7.68285C4.68609 7.47126 4.9471 7.29273 5.27797 7.17067C5.60884 7.04861 5.99413 6.9887 6.38336 6.99881L6.38342 6.99875ZM13.5382 7.01358C13.918 7.01692 14.2879 7.0866 14.6014 7.21391C14.915 7.34123 15.1583 7.52054 15.3012 7.72944C15.444 7.93835 15.4799 8.16759 15.4045 8.38855C15.329 8.6095 15.1455 8.81236 14.8769 8.97181C14.698 9.07996 14.4848 9.16601 14.2495 9.22498C14.0142 9.28395 13.7615 9.31468 13.5061 9.31538C13.2507 9.31608 12.9976 9.28675 12.7614 9.22908C12.5252 9.17141 12.3106 9.08654 12.13 8.97938C11.9494 8.87221 11.8063 8.74487 11.7091 8.60472C11.6119 8.46457 11.5625 8.31438 11.5637 8.16282C11.5649 8.01127 11.6166 7.86135 11.716 7.72174C11.8154 7.58212 11.9604 7.45558 12.1427 7.34941C12.3256 7.2409 12.5433 7.15526 12.783 7.09758C13.0227 7.03989 13.2794 7.01133 13.538 7.01358H13.5382ZM20.779 7.01448C20.779 7.01448 20.7791 7.01448 20.7791 7.01448C21.2622 7.02704 21.7197 7.14654 22.0616 7.34941C22.4216 7.5649 22.623 7.85621 22.6219 8.15961C22.6207 8.46301 22.4171 8.75379 22.0555 8.96832C21.6939 9.18285 21.2039 9.30365 20.6925 9.30431C20.1812 9.30496 19.6903 9.18541 19.3272 8.97181C19.0517 8.80833 18.8659 8.59928 18.7941 8.37207C18.7223 8.14486 18.7679 7.91008 18.9248 7.6985C19.0818 7.48692 19.3428 7.3084 19.6736 7.18634C20.0045 7.06429 20.3898 7.00438 20.779 7.01448ZM2.58477 9.81042C2.23666 9.80104 2 10.0728 2 10.5535V20.0957C2 20.7645 2.45806 21.5578 3.03715 21.8923L11.9279 27.0264C12.507 27.3608 12.9651 27.0964 12.9651 26.4277V16.8853C12.9651 16.2165 12.507 15.4233 11.9279 15.0888L3.03715 9.95474C2.87437 9.86064 2.72098 9.81393 2.58477 9.8103V9.81042ZM24.4152 9.81054C24.2791 9.81417 24.1258 9.86076 23.963 9.95486L15.0719 15.089C14.4928 15.4234 14.0348 16.2168 14.0348 16.8855V26.428C14.0348 27.0966 14.4928 27.3609 15.0719 27.0264L23.963 21.8925C24.5421 21.5581 25 20.7648 25 20.0961V10.5536C25 10.073 24.7634 9.80134 24.4152 9.81066V9.81054ZM10.1865 15.0502C10.3936 15.0359 10.6289 15.1009 10.8685 15.2387C11.1081 15.3764 11.3437 15.5821 11.5513 15.835C11.7589 16.0878 11.9312 16.3788 12.0509 16.6786C12.1706 16.9783 12.2333 17.2763 12.2328 17.5422C12.233 17.7412 12.198 17.9178 12.1296 18.0621C12.0613 18.2064 11.9611 18.3155 11.8346 18.3832C11.7082 18.4508 11.558 18.4757 11.3927 18.4564C11.2274 18.4371 11.0503 18.374 10.8713 18.2707C10.6924 18.1674 10.5152 18.026 10.3499 17.8544C10.1846 17.6828 10.0345 17.4846 9.90805 17.2709C9.7816 17.0572 9.68135 16.8324 9.61303 16.6092C9.54471 16.386 9.50965 16.1689 9.50986 15.9702C9.50937 15.7047 9.57162 15.48 9.69038 15.3185C9.80913 15.1571 9.98022 15.0645 10.1865 15.0502ZM20.2023 16.7848C20.2024 16.7848 20.2024 16.7848 20.2024 16.7848C20.4087 16.7992 20.5797 16.8917 20.6985 17.0532C20.8172 17.2146 20.8794 17.4393 20.879 17.7048C20.8785 18.1059 20.7349 18.5731 20.4796 19.0038C20.2243 19.4345 19.8783 19.7934 19.5175 20.0017C19.1567 20.21 18.8106 20.2507 18.5553 20.1148C18.3001 19.9789 18.1564 19.6775 18.156 19.2768C18.1555 19.0108 18.2182 18.7129 18.3379 18.4132C18.4576 18.1134 18.6299 17.8224 18.8375 17.5696C19.0452 17.3167 19.2807 17.111 19.5203 16.9732C19.76 16.8355 19.9952 16.7705 20.2023 16.7848ZM3.40934 18.5626C3.61646 18.5483 3.85172 18.6132 4.09136 18.751C4.331 18.8888 4.56653 19.0945 4.77414 19.3474C4.98176 19.6002 5.15411 19.8912 5.27378 20.191C5.39345 20.4908 5.45619 20.7887 5.45568 21.0547C5.45589 21.2536 5.42083 21.4303 5.3525 21.5746C5.28417 21.7189 5.18392 21.8279 5.05747 21.8956C4.93102 21.9633 4.78086 21.9882 4.61557 21.9689C4.45028 21.9496 4.27311 21.8865 4.09418 21.7832C3.91525 21.6799 3.73808 21.5384 3.57279 21.3668C3.4075 21.1953 3.25734 20.997 3.1309 20.7833C3.00446 20.5697 2.90421 20.3448 2.83588 20.1216C2.76756 19.8984 2.7325 19.6813 2.73272 19.4826C2.73221 19.2171 2.79446 18.9924 2.91322 18.8309C3.03197 18.6695 3.20307 18.5769 3.40934 18.5626Z"
                    stroke="var(--static2)"
                    stroke-width="2.42105"
                    mask="url(#path-1-outside-1_100_1631)"
                  />
                </svg>
              </div>

              <div className="option rolloutbutton" id="rolloutbutton">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <path
                    d="M11.5032 20.8392L16.9999 15.3425L22.4965 20.8392C23.049 21.3917 23.9415 21.3917 24.494 20.8392C25.0465 20.2867 25.0465 19.3942 24.494 18.8417L17.9915 12.3392C17.439 11.7867 16.5465 11.7867 15.994 12.3392L9.49152 18.8417C8.93902 19.3942 8.93902 20.2867 9.49152 20.8392C10.044 21.3775 10.9507 21.3917 11.5032 20.8392Z"
                    fill="var(--static2)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </main>
        <div id="tip-bar">
          <button id="close-btn">&times;</button>
          <p>
            <b>Tip:</b> Press the Spacebar to randomize faster!
          </p>
        </div>
      </div>
    </>
  );
};

export default ColorCraft;
