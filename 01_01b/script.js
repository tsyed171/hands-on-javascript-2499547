/**
 * Add date to output.
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 */
// this gets data from the data.js file
// created time class to add time component; datetime puts in machine readble time format; add date class to change to american format
// can add ${imgData.created_at} in datetime category in time class

import data from "./data.js";

const mainContent = document.querySelector(".main-content");

const Card = (data) => {
  const imgData = data[0];

  const date = new Date(imgData.created_at);

  const markup = `
    <figure class="image">
      <img
        srcset="
          ${imgData.urls.full} ${imgData.width}w,
          ${imgData.urls.regular} 1080w,
          ${imgData.urls.small} 400w
        "
        sizes="(max-width: 450px) 400px, (max-width: 800) 1080px"
        src="${imgData.urls.regular}"
        width="${imgData.width}"
        height="${imgData.height}"
        alt="${imgData.description}"
        loading="lazy"
      />
      <figcaption class="image__caption">
        <h3 class="image__title">${imgData.description}</h3>
        <div class="image__meta">
          <p>
            Photo by
            <span class="image__photog">${imgData.user.name}</span>.
          </p>
         
          <p>
            Uploaded on
            <time class="image__date" datetime="">${date.toLocaleString(
              "default",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}</time>
          </p>

          <p>
            <a href="${imgData.links.self}" class="image__link">
              View it on Unsplash.
            </a>
          </p>
        </div>
      </figcaption>
    </figure>
  `;

  mainContent.innerHTML = markup;
};

Card(data);
