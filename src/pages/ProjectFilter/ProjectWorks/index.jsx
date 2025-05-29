import React, { useEffect } from "react";
import gsap from "gsap";
import "./index.css";

const ProjectWorks = ({ filteredProjects }) => {
  useEffect(() => {
    const toggle = {
      element: document.querySelector(".project_selector_toggle"),
      circle: document.querySelector(".project_selector_toggle_circle"),
    };

    const view = {
      grid: document.querySelector(".works_grid"),
      index: document.querySelector(".works_index"),
    };

    let isActive = false;

    const animateIndexItem = (item) => {
      const itemImages = item.querySelectorAll(".works_index_item_media_image");
      const itemArrows = item.querySelectorAll(".works_index_item_media_arrow");

      const itemTexts = item.querySelectorAll(".works_index_item_text");

      const tlIndexRow = gsap.timeline({
        paused: true,
        defaults: { duration: 0.6, ease: "expo.inout" },
      })
        .to(itemArrows, { autoAlpha: 1, xPercent: 0 })
        .to(itemImages, { autoAlpha: 1, yPercent: 0, stagger: 0.032 }, 0)
        .to(itemTexts, { autoAlpha: 0 }, 0);

      item.addEventListener("mouseenter", () => tlIndexRow.play());
      item.addEventListener("mouseleave", () => tlIndexRow.reverse());
    };

    const addEventListeners = () => {
      const tlToggle = gsap.timeline({ paused: true }).to(toggle.circle, {
        xPercent: 140,
        duration: 0.2,
        ease: "expo.inout",
      });

      gsap.set(view.index, { autoAlpha: 0, display: "none" });

      const tlView = gsap.timeline({ paused: true }).to(view.grid, {
        duration: 0.64,
        autoAlpha: 0,
        display: "none",
        ease: "expo.inout",
        onComplete: () => {
          tlView.to(view.index, { autoAlpha: 1, display: "block" });
        },
      });

    //   toggle.element.addEventListener("click", () => {
    //     !isActive ? tlToggle.play() : tlToggle.reverse();
    //     !isActive ? tlView.play() : tlView.reverse();
    //     isActive = !isActive;
    //   });
    toggle.element.addEventListener("click", () => {
        if (!isActive) {
          // Show Index View
          tlToggle.play();
          tlView.play().eventCallback("onComplete", () => {
            gsap.set(view.grid, { autoAlpha: 0, display: "none" }); // Ensure grid is hidden
          });
        } else {
          // Show Grid View
          tlToggle.reverse();
          tlView.reverse().eventCallback("onReverseComplete", () => {
            gsap.set(view.index, { autoAlpha: 0, display: "none" }); // Ensure index is hidden
            gsap.set(view.grid, { autoAlpha: 1, display: "block" }); // Reset grid visibility
          });
        }
        isActive = !isActive;
      });
      
      const indexItems = document.querySelectorAll(".works_index_item");
      indexItems.forEach((item) => {
        gsap.set(".works_index_item_media_image", {
          autoAlpha: 0,
          yPercent: 100,
        });
        gsap.set(".works_index_item_media_arrow", {
          autoAlpha: 0,
          xPercent: -100,
        });
        animateIndexItem(item);
      });
    };

    addEventListeners();

    return () => {
      // Cleanup any event listeners added
      toggle.element.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <>
      <div>
        <div className="project_selector">
          <span>Grid</span>
          <div className="project_selector_toggle">
            <div className="project_selector_toggle_circle"></div>
          </div>
          <span>Index</span>
        </div>
      </div>
      <section className="works">
        <div className="works_wrapper">
          <div className="works_selector">
            <div className="works_grid">
              {filteredProjects.map((l, index) => {
                return (
                  <a
                    href={l.url} target="_blank" rel="noopener noreferrer"
                    className={`works_grid_item ${
                      index % 2 ? "--item-left" : ""
                    }`}
                    key={index}
                  >
                    <img
                      className="works_grid_item_image"
                      src={`/images/${l.src}`}
                      alt=""
                    />
                    <div className="works_grid_item_title">
                      <p>{l.title}</p>
                      <p>- {l.category}</p>
                    </div>
                    <div className="works_grid_item_info">
                    <span>{ l.id < 10 ? `0${l.id}` : l.id }</span>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="works_index">
              {filteredProjects.map((l, index) => {
                return (
                  <div className="works_index_item" key={index}>
                    <div className="works_index_item_text">
                      <div className="works_index_item_text_flex">
                        <span>{l.title}</span>
                        <span>/ {l.category}</span>
                      </div>
                       
                      <h1>{ l.id < 10 ? `0${l.id}` : l.id }</h1>
                    </div>
                    <div className="works_index_item_media">
                      <div className="works_index_item_media_arrow">
                      <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="size-6"
                            style={{ width: "34px", height: "34px", display: "inline-block", fontSize: "25px" }}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                            />
                        </svg>

                      </div>
                      {[...Array(4)].map((_, idx) => (
                        <img
                          className="works_index_item_media_image"
                          src={`/images/${l.src}`}
                          alt=""
                          key={idx}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectWorks;
