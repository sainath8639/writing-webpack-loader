import { useEffect, useState } from "react";
import { Splide } from "@splidejs/splide";
import "./App.scss";

// Your SCSS code here

export default function App() {
  useEffect(() => {
    console.log("efgh");
    const s1 = new Splide(".c1-splide", {
      perPage: 1,
      type: "loop",
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      // drag: "free",
      arrows: true,
      pagination: true,
      // autoplay: true,
      paginationDirection: "ttb",
      perMove: 1,
      gap: "4rem",
      breakpoints: {
        640: {
          perPage: 1,
          gap: ".7rem",
        },
        480: {
          perPage: 1,
          gap: ".7rem",
        },
      },
      paginationDirectionL: "ttb",
    });
    s1.mount();
    const s2 = new Splide(".c2-splide", {
      perPage: 1,
      type: "loop",
      // drag: "free",
      arrows: true,
      pagination: true,
      // autoplay: true,
      perMove: 1,
      gap: "2rem",
      breakpoints: {
        640: {
          perPage: 1,
          gap: ".7rem",
        },
        480: {
          perPage: 1,
          gap: ".7rem",
        },
      },
    });
    s2.mount();
    const s3 = new Splide(".c3-splide", {
      perPage: 1,
      type: "loop",
      // drag: "free",
      arrows: true,
      pagination: true,
      // autoplay: true,
      perMove: 1,
      gap: "2rem",
      breakpoints: {
        640: {
          perPage: 1,
          gap: ".7rem",
        },
        480: {
          perPage: 1,
          gap: ".7rem",
        },
      },
    });
    s3.mount();
    // const splide = new Splide(".splide", {
    //   perPage: 1,
    //   type: "loop",
    //   // drag: "free",
    //   arrows: true,
    //   pagination: true,
    //   // autoplay: true,
    //   perMove: 1,
    //   gap: "2rem",
    //   breakpoints: {
    //     640: {
    //       perPage: 1,
    //       gap: ".7rem",
    //     },
    //     480: {
    //       perPage: 1,
    //       gap: ".7rem",
    //     },
    //   },
    // });
    // splide.mount();
  }, []);
  var aa = "xyz";
  const [state, setSTate] = useState(XYZ);

  return (
    <div>
      <div class={"splide  c1-splide" + aa}>
        <div class="splide__track">
          <div class="splide__list">
            <div class="splide__slide">
              <div class="spr_carousel__item">
                <div class="spr_carousel_item__images">
                  <img
                    class="background"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/9df0bb73-4680-4353-b9a2-e221ee35d59f-1267961948/background.webp"
                    alt=""
                  />
                  <img
                    class="middle_design"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/f2b572b5-f4a6-4759-bcd6-fd1a6d580a3a-2089438828/middle-design.webp"
                    alt=""
                  />
                </div>
                <div class="spr_carousel_content">
                  <span>this is some content</span>
                </div>
                <div class="third_girl">
                  <img
                    class="girl"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/e5e7162f-dee4-4bf1-ae19-b8bfc65c9dad-1938444370/girl.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="splide__slide">
              <div class="spr_carousel__item">
                <div class="spr_carousel_item__images">
                  <img
                    class="background"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/9df0bb73-4680-4353-b9a2-e221ee35d59f-1267961948/background.webp"
                    alt=""
                  />
                  <img
                    class="middle_design"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/f2b572b5-f4a6-4759-bcd6-fd1a6d580a3a-2089438828/middle-design.webp"
                    alt=""
                  />
                </div>
                <div class="spr_carousel_content">
                  <span>this is some content</span>
                </div>
                <div class="third_girl">
                  <img
                    class="girl"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/e5e7162f-dee4-4bf1-ae19-b8bfc65c9dad-1938444370/girl.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="splide__slide">
              <div class="spr_carousel__item">
                <div class="spr_carousel_item__images">
                  <img
                    class="background"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/9df0bb73-4680-4353-b9a2-e221ee35d59f-1267961948/background.webp"
                    alt=""
                  />
                  <img
                    class="middle_design"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/f2b572b5-f4a6-4759-bcd6-fd1a6d580a3a-2089438828/middle-design.webp"
                    alt=""
                  />
                </div>
                <div class="spr_carousel_content">
                  <span>this is some content</span>
                </div>
                <div class="third_girl">
                  <img
                    class="girl"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/e5e7162f-dee4-4bf1-ae19-b8bfc65c9dad-1938444370/girl.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="splide c2-splide">
        <div class="splide__track">
          <div class="splide__list">
            <div class="splide__slide">
              <div class="spr_carousel__item">
                <div class="spr_carousel_item__images">
                  <img
                    class="background"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/9df0bb73-4680-4353-b9a2-e221ee35d59f-1267961948/background.webp"
                    alt=""
                  />
                  <img
                    class="middle_design"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/f2b572b5-f4a6-4759-bcd6-fd1a6d580a3a-2089438828/middle-design.webp"
                    alt=""
                  />
                </div>
                <div class="spr_carousel_content">
                  <span>this is some content</span>
                </div>
                <div class="third_girl">
                  <img
                    class="girl"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/e5e7162f-dee4-4bf1-ae19-b8bfc65c9dad-1938444370/girl.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="splide__slide">
              <div class="spr_carousel__item">
                <div class="spr_carousel_item__images">
                  <img
                    class="background"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/9df0bb73-4680-4353-b9a2-e221ee35d59f-1267961948/background.webp"
                    alt=""
                  />
                  <img
                    class="middle_design"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/f2b572b5-f4a6-4759-bcd6-fd1a6d580a3a-2089438828/middle-design.webp"
                    alt=""
                  />
                </div>
                <div class="spr_carousel_content">
                  <span>this is some content</span>
                </div>
                <div class="third_girl">
                  <img
                    class="girl"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/e5e7162f-dee4-4bf1-ae19-b8bfc65c9dad-1938444370/girl.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="splide__slide">
              <div class="spr_carousel__item">
                <div class="spr_carousel_item__images">
                  <img
                    class="background"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/9df0bb73-4680-4353-b9a2-e221ee35d59f-1267961948/background.webp"
                    alt=""
                  />
                  <img
                    class="middle_design"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/f2b572b5-f4a6-4759-bcd6-fd1a6d580a3a-2089438828/middle-design.webp"
                    alt=""
                  />
                </div>
                <div class="spr_carousel_content">
                  <span>this is some content</span>
                </div>
                <div class="third_girl">
                  <img
                    class="girl"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/e5e7162f-dee4-4bf1-ae19-b8bfc65c9dad-1938444370/girl.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="splide c3-splide">
        <div class="splide__track">
          <div class="splide__list">
            <div class="splide__slide">
              <div class="spr_carousel__item">
                <div class="spr_carousel_item__images">
                  <img
                    class="background"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/9df0bb73-4680-4353-b9a2-e221ee35d59f-1267961948/background.webp"
                    alt=""
                  />
                  <img
                    class="middle_design"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/f2b572b5-f4a6-4759-bcd6-fd1a6d580a3a-2089438828/middle-design.webp"
                    alt=""
                  />
                </div>
                <div class="spr_carousel_content">
                  <span>this is some content</span>
                </div>
                <div class="third_girl">
                  <img
                    class="girl"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/e5e7162f-dee4-4bf1-ae19-b8bfc65c9dad-1938444370/girl.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="splide__slide">
              <div class="spr_carousel__item">
                <div class="spr_carousel_item__images">
                  <img
                    class="background"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/9df0bb73-4680-4353-b9a2-e221ee35d59f-1267961948/background.webp"
                    alt=""
                  />
                  <img
                    class="middle_design"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/f2b572b5-f4a6-4759-bcd6-fd1a6d580a3a-2089438828/middle-design.webp"
                    alt=""
                  />
                </div>
                <div class="spr_carousel_content">
                  <span>this is some content</span>
                </div>
                <div class="third_girl">
                  <img
                    class="girl"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/e5e7162f-dee4-4bf1-ae19-b8bfc65c9dad-1938444370/girl.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="splide__slide">
              <div class="spr_carousel__item">
                <div class="spr_carousel_item__images">
                  <img
                    class="background"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/9df0bb73-4680-4353-b9a2-e221ee35d59f-1267961948/background.webp"
                    alt=""
                  />
                  <img
                    class="middle_design"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/f2b572b5-f4a6-4759-bcd6-fd1a6d580a3a-2089438828/middle-design.webp"
                    alt=""
                  />
                </div>
                <div class="spr_carousel_content">
                  <span>this is some content</span>
                </div>
                <div class="third_girl">
                  <img
                    class="girl"
                    src="https://prod3-sprcdn-assets.sprinklr.com/160258/e5e7162f-dee4-4bf1-ae19-b8bfc65c9dad-1938444370/girl.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
