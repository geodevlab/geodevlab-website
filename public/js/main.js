/**
 * Script for adding dynamic mouseover descriptions to tags. For each tag on the
 * page, an onmouseover event is added which will unhide a matching tag
 * description element.
 */
const initialize = function initialize()
{
    const tags = document.querySelectorAll('ul.tag-list li');

    tags.forEach(
        tag => {
            tag.onmouseover = (event) => {
                const tag = event.target;
                const tagId = tag.dataset.tagId;

                if (tagId === undefined) {
                    return;
                }

                const tagDesc = document.querySelector(`.tag-desc[data-tag-id="${tagId}"]`);
                if (tagDesc === null) {
                    return;
                }

                tagDesc.style.display = 'inline';
            };
        }
    );
};


window.onload = initialize;
